package com.jfranco.eventos.servicios.eventos_servicio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class EventosServicioApplication {

	public static void main(String[] args) {
		SpringApplication.run(EventosServicioApplication.class, args);
	}

}
