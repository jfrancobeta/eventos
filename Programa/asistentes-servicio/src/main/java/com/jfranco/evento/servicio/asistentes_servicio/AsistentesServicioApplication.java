package com.jfranco.evento.servicio.asistentes_servicio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class AsistentesServicioApplication {

	public static void main(String[] args) {
		SpringApplication.run(AsistentesServicioApplication.class, args);
	}

}
