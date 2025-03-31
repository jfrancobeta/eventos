package com.jfranco.eventos.servicios.eventos_servicio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
@EntityScan({"com.jfranco.eventos.evento_commons.models"})
public class EventosServicioApplication {

	public static void main(String[] args) {
		SpringApplication.run(EventosServicioApplication.class, args);
	}

}
