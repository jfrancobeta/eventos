package com.jfranco.eventos.servicios.eventos_servicio.clients;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.jfranco.eventos.servicios.eventos_servicio.models.Usuario;

@FeignClient(name = "usuario-servicio")
public interface UsuarioFeingClient {
    
    @GetMapping("/buscar/{username}")
    public Usuario findByUsername(@PathVariable String username);

    
}