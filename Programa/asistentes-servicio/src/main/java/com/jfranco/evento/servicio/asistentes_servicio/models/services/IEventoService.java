package com.jfranco.evento.servicio.asistentes_servicio.models.services;
import java.util.List;



import com.jfranco.evento.servicio.asistentes_servicio.models.entity.Evento;

public interface IEventoService {
    
    public List<Evento> listar();

   
    public Evento findById(Long id);
}
