package com.jfranco.evento.servicio.asistentes_servicio.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.jfranco.evento.servicio.asistentes_servicio.clients.EventosClienteFeing;
import com.jfranco.evento.servicio.asistentes_servicio.models.entity.Evento;

@Service
public class EventoServiceFeing implements IEventoService{

    @Autowired
    private EventosClienteFeing clienteFeing;

    @Override
    public List<Evento> listar() {
        return clienteFeing.listar();
    }

    @Override
    public Evento findById(Long id) {
        return clienteFeing.findById(id);
    }
    
}
