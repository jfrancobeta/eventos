package com.jfranco.evento.servicio.usuario_servicio.clients;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.jfranco.evento.servicio.usuario_servicio.models.entity.Notificacion;

@FeignClient(name = "notificaciones-servicio")
public interface NotificacionClienteFeing {

    


    @PostMapping("/notificacion")
    public Notificacion enviarNotificacion(@RequestBody Notificacion notificacion);
    
}
