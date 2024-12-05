package com.jfranco.eventos.servicios.gateway_servicio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;

@SpringBootApplication
@EnableWebFluxSecurity
public class GatewayServicioApplication {

	public static void main(String[] args) {
		SpringApplication.run(GatewayServicioApplication.class, args);
	}

}
