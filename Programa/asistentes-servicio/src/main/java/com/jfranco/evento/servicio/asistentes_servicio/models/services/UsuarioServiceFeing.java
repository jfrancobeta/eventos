package com.jfranco.evento.servicio.asistentes_servicio.models.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jfranco.evento.servicio.asistentes_servicio.clients.UsuarioClienteFeing;
import com.jfranco.evento.servicio.asistentes_servicio.models.entity.Usuario;

@Service
public class UsuarioServiceFeing implements IUsuarioService {

    @Autowired
    private UsuarioClienteFeing usuarioClienteFeing ;

    @Override
    public Usuario findByUsername(String username) {
        return usuarioClienteFeing.findByUsername(username);
    }
    
    
}
