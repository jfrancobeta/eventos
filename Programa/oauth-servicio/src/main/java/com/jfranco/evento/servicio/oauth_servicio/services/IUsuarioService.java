package com.jfranco.evento.servicio.oauth_servicio.services;

import com.jfranco.evento.servicio.oauth_servicio.models.Usuario;

public interface IUsuarioService {
    public Usuario findByUsername(String username);
}
