package com.jfranco.eventos.servicios.gateway_servicio.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.convert.converter.Converter;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.security.web.server.SecurityWebFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsConfigurationSource;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;

import java.util.Collection;
import reactor.core.publisher.Mono;
import java.util.stream.Collectors;

@Configuration
@EnableWebFluxSecurity
public class SecurityConfig {

    @Bean
    SecurityWebFilterChain securityWebFilterChain(ServerHttpSecurity http){
        http.authorizeExchange(auth -> auth
            .pathMatchers("/authorized").permitAll()
            .pathMatchers("/api/usuario/crear").permitAll()
            .pathMatchers("/api/asistentes/**").hasRole("ADMIN")
            .pathMatchers("/api/eventos/**").hasAnyRole("ADMIN","USER")
            .pathMatchers("/api/usuario/**").hasRole("ADMIN")
            .pathMatchers("/api/notificaciones/**").hasRole("ADMIN")
            .anyExchange().authenticated())
        .csrf(csrf -> csrf.disable())
        .oauth2Login(Customizer.withDefaults())
        .oauth2Client(Customizer.withDefaults())
        .cors(cors -> cors.configurationSource(corsConfigurationSource()))
        .oauth2ResourceServer(resourceServer -> resourceServer.jwt(
            jwt -> jwt.jwtAuthenticationConverter(new Converter<Jwt,Mono<AbstractAuthenticationToken>>(){

                @Override
                public Mono<AbstractAuthenticationToken> convert(Jwt source) {
                    Collection<String> roles = source.getClaimAsStringList("roles");
                    Collection<GrantedAuthority> authorities = roles.stream()
                        .map(role -> new SimpleGrantedAuthority(role)).collect(Collectors.toList());
                        
                    return Mono.just(new JwtAuthenticationToken(source, authorities));
                }
                
            })
        ));
        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();
        config.addAllowedOrigin("http://localhost:4200");  // El origen del frontend
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");
        config.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        return source;
    }

    
    
}
