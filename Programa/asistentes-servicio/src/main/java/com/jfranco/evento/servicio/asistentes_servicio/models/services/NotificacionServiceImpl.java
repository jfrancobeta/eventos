package com.jfranco.evento.servicio.asistentes_servicio.models.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.jfranco.evento.servicio.asistentes_servicio.clients.NotificacionesClienteFeing;
import com.jfranco.evento.servicio.asistentes_servicio.models.entity.Notificacion;

@Service
public class NotificacionServiceImpl implements INotificacionService{

    @Autowired
    private NotificacionesClienteFeing notificacionesClienteFeing;
    
    @Override
    public Notificacion enviarNotificacion(Notificacion notificacion) {
        return notificacionesClienteFeing.enviarNotificacion(notificacion);
    }
    
}
