package com.jfranco.evento.servicio.asistentes_servicio.models.services;

import com.jfranco.evento.servicio.asistentes_servicio.models.entity.Usuario;

public interface IUsuarioService {
    
    public Usuario findByUsername(String id);
}
