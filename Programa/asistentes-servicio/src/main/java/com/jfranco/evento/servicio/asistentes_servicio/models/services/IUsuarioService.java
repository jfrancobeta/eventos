package com.jfranco.evento.servicio.asistentes_servicio.models.services;

import com.jfranco.eventos.usuario_commons.models.Usuario;

public interface IUsuarioService {
    
    public Usuario findByUsername(String id);
}
