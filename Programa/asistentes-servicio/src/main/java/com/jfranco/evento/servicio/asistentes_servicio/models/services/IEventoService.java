package com.jfranco.evento.servicio.asistentes_servicio.models.services;
import java.util.List;

import com.jfranco.eventos.evento_commons.models.Evento;



public interface IEventoService {
    
    public List<Evento> listar();

   
    public Evento findById(Long id);
}
