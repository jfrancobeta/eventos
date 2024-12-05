package com.jfranco.eventos.servicios.eureka_servicio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@EnableEurekaServer
@SpringBootApplication
public class EurekaServicioApplication {

	public static void main(String[] args) {
		SpringApplication.run(EurekaServicioApplication.class, args);
	}

}
