package com.jfranco.evento.servicio.asistentes_servicio.models.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.jfranco.evento.servicio.asistentes_servicio.models.entity.Asistente;

public interface AsistenteRepository extends JpaRepository<Asistente,Long> {
    

   @Query("SELECT a FROM Asistente a WHERE a.usuario_id = :usuarioId")
    public List<Asistente> findByUsuarioId(@Param("usuarioId") Long usuarioId);

    @Query("SELECT a FROM Asistente a WHERE a.evento_id = :eventoId")
    public List<Asistente> findByEventoId(@Param("eventoId") Long eventoId);
}
