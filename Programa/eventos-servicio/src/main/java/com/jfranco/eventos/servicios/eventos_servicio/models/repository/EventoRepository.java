package com.jfranco.eventos.servicios.eventos_servicio.models.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jfranco.eventos.servicios.eventos_servicio.models.Evento;

public interface EventoRepository extends JpaRepository<Evento,Long>{
    
}
