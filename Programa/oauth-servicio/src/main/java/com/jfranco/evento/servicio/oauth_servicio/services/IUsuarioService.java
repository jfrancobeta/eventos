package com.jfranco.evento.servicio.oauth_servicio.services;

import com.jfranco.eventos.usuario_commons.models.Usuario;

public interface IUsuarioService {
    public Usuario findByUsername(String username);
}
