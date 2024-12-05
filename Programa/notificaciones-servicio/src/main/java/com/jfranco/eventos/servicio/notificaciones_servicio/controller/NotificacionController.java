package com.jfranco.eventos.servicio.notificaciones_servicio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.jfranco.eventos.servicio.notificaciones_servicio.models.entity.Notificacion;
import com.jfranco.eventos.servicio.notificaciones_servicio.models.services.IEmailService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class NotificacionController {

    @Autowired
    private IEmailService emailService;

    @PostMapping("/notificacion")
    public ResponseEntity<?> enviarNotificacion(@RequestBody Notificacion notificacion) {
        emailService.enviarCorreo(notificacion);
        return ResponseEntity.ok().body(notificacion);
    }
    
    
}
