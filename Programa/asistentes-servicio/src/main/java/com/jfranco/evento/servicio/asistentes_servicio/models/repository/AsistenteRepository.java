package com.jfranco.evento.servicio.asistentes_servicio.models.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jfranco.evento.servicio.asistentes_servicio.models.entity.Asistente;

public interface AsistenteRepository extends JpaRepository<Asistente,Long> {
    
}
