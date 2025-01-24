package com.jfranco.evento.servicio.usuario_servicio.models.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jfranco.evento.servicio.usuario_servicio.models.entity.Usuario;



public interface UsuarioRepository extends JpaRepository<Usuario,Long> {

    Optional<Usuario> findByUsername(String username);

    Optional<Usuario> findByEmail(String email);

    Optional<Usuario> findByResetToken(String resetToken);
} 