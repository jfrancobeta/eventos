package com.jfranco.evento.servicio.usuario_servicio.models.services;



import java.util.List;
import java.util.Optional;

import com.jfranco.eventos.usuario_commons.models.Usuario;


public interface IUsuarioService {

    
    public List<Usuario> findAll();

    public Usuario findById(Long id);

    public Usuario save(Usuario usuario);

    public Optional<Usuario> findByUsername(String username);

    public Optional<Usuario> findByEmail(String email);

    public Optional<Usuario> findByResetToken(String resetToken);

    public void deleteById(Long id);

    
} 