package com.jfranco.eventos.servicios.eventos_servicio.models.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jfranco.eventos.servicios.eventos_servicio.clients.UsuarioFeingClient;
import com.jfranco.eventos.usuario_commons.models.Usuario;

@Service
public class UsuarioService implements IUsuarioService {

    @Autowired
    private UsuarioFeingClient usuarioFeingClient;
    
    @Override
    public Usuario findByUsername(String username) {
        return usuarioFeingClient.findByUsername(username);
    }
    
}
