package com.jfranco.evento.servicio.oauth_servicio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class OauthServicioApplication {

	public static void main(String[] args) {
		SpringApplication.run(OauthServicioApplication.class, args);
	}

}
