package com.jfranco.eventos.servicios.eventos_servicio.models.services;

import java.util.List;

import com.jfranco.eventos.servicios.eventos_servicio.models.Evento;

public interface IEventoService {

    public List<Evento> findAll();

    public Evento findById(Long id);

    public Evento save(Evento evento);

    public void deleteById(Long id);

    public void actualizarEstadoEventos();

    public List<Evento> findByEstadoTrue();

}
