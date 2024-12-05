package com.jfranco.evento.servicio.asistentes_servicio.models.services;

import java.util.List;

import com.jfranco.evento.servicio.asistentes_servicio.models.entity.Asistente;



public interface IAsistenteService {
    
    public List<Asistente> findAll();

    public Asistente findById(Long id);

    public Asistente save(Asistente asistente);

    public void deleteById(Long id);
}
