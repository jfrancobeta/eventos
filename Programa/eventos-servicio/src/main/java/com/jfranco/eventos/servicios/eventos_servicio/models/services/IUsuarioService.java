package com.jfranco.eventos.servicios.eventos_servicio.models.services;

import com.jfranco.eventos.servicios.eventos_servicio.models.Usuario;

public interface IUsuarioService {
    public Usuario findByUsername(String username);
}
