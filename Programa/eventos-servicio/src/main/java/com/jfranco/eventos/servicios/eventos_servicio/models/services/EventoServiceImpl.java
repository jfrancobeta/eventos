package com.jfranco.eventos.servicios.eventos_servicio.models.services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jfranco.eventos.evento_commons.models.Evento;
import com.jfranco.eventos.servicios.eventos_servicio.models.repository.EventoRepository;

@Service
public class EventoServiceImpl implements IEventoService {

    @Autowired
    private EventoRepository eventoRepository;

    @Override
    @Transactional(readOnly = true)
    public List<Evento> findAll() {
        return eventoRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Evento findById(Long id) {
        return eventoRepository.findById(id).orElse(null);
    }

    @Override
    @Transactional()
    public Evento save(Evento evento) {
        return eventoRepository.save(evento);
    }

    @Override
    @Transactional()
    public void deleteById(Long id) {
        eventoRepository.deleteById(id);
    }

    @Override
    public void actualizarEstadoEventos() {
        List<Evento> eventos = eventoRepository.findAll();
        Date now = new Date();
        for (Evento evento : eventos) {
            if (evento.getFecha().before(now)) {
                evento.setEstado(false);
                eventoRepository.save(evento);
            }
        }
    }

    @Override
    public List<Evento> findByEstadoTrue() {
        return eventoRepository.findByEstadoTrue();
    }
    
}
