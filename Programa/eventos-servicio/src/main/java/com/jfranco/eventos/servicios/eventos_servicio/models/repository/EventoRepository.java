package com.jfranco.eventos.servicios.eventos_servicio.models.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jfranco.eventos.evento_commons.models.Evento;


public interface EventoRepository extends JpaRepository<Evento,Long>{
 
    List<Evento> findByEstadoTrue();
}
