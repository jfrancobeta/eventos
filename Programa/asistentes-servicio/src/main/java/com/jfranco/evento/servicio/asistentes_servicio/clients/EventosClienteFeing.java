package com.jfranco.evento.servicio.asistentes_servicio.clients;


import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.jfranco.evento.servicio.asistentes_servicio.models.entity.Evento;

@FeignClient(name = "eventos-servicio")
public interface EventosClienteFeing {
    
    @GetMapping("/listar")
    public List<Evento> listar();

    @GetMapping("/listar/{id}")
    public Evento findById(@PathVariable Long id);

    
}
