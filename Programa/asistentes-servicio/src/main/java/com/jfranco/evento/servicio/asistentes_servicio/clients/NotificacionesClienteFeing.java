package com.jfranco.evento.servicio.asistentes_servicio.clients;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.jfranco.evento.servicio.asistentes_servicio.models.entity.Notificacion;

@FeignClient(name = "notificaciones-servicio")
public interface NotificacionesClienteFeing {

    @PostMapping("/notificacion")
    public Notificacion enviarNotificacion(@RequestBody Notificacion notificacion);
    
}
