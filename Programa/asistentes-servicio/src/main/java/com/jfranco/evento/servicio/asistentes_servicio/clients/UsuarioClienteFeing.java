package com.jfranco.evento.servicio.asistentes_servicio.clients;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.jfranco.eventos.usuario_commons.models.Usuario;


@FeignClient(name = "usuario-servicio")
public interface UsuarioClienteFeing {

    @GetMapping("/buscar/{username}")
    public Usuario findByUsername(@PathVariable String username);
}
