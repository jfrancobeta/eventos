package com.jfranco.evento.servicio.usuario_servicio.models.services;



import java.util.List;
import java.util.Optional;

import com.jfranco.evento.servicio.usuario_servicio.models.entity.Usuario;

public interface IUsuarioService {

    
    public List<Usuario> findAll();

    public Usuario findById(Long id);

    public Usuario save(Usuario usuario);

    public Optional<Usuario> findByUsername(String username);

    public void deleteById(Long id);

    
} 