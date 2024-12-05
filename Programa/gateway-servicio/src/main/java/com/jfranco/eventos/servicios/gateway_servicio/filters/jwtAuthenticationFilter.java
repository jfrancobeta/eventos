package com.jfranco.eventos.servicios.gateway_servicio.filters;

import java.util.Base64;
import java.util.Map;

import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.server.ServerWebExchange;

import com.fasterxml.jackson.databind.ObjectMapper;

import reactor.core.publisher.Mono;

@Component
public class jwtAuthenticationFilter implements GlobalFilter{

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        String token = exchange.getRequest().getHeaders().getFirst(HttpHeaders.AUTHORIZATION);

        if (token == null || !token.startsWith("Bearer ")) {
            return Mono.error(new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Missing or invalid token"));
        }
         try {
            // Extraer el payload del token
            token = token.substring(7); // Quitar el prefijo "Bearer "
            String[] chunks = token.split("\\.");
            if (chunks.length < 2) {
                throw new IllegalArgumentException("Invalid JWT structure");
            }

            // Decodificar el payload (2do segmento del JWT)
            String payload = new String(Base64.getDecoder().decode(chunks[1]));
            
            // Convertir el payload JSON a un mapa
            ObjectMapper mapper = new ObjectMapper();
            Map<String, Object> claims = mapper.readValue(payload, Map.class);

            // Extraer el username del claim "sub" (o el campo que utilices)
            String username = (String) claims.get("sub"); 

            if (username == null) {
                throw new IllegalArgumentException("Username not found in token");
            }

            // Agregar X-Username al header
            exchange = exchange.mutate()
                    .request(exchange.getRequest().mutate()
                            .header("X-Username", username)
                            .build())
                    .build();

        } catch (Exception e) {
            // Si algo falla, rechazamos la solicitud
            return Mono.error(new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid token"));
        }


        // Lógica de validación del token JWT aquí, utilizando un proveedor de JWT
        // Si el token es válido, continua con la solicitud
        return chain.filter(exchange);
    }
    
}
