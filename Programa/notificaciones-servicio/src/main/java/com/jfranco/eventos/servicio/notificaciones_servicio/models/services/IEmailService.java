package com.jfranco.eventos.servicio.notificaciones_servicio.models.services;

import com.jfranco.eventos.servicio.notificaciones_servicio.models.entity.Notificacion;

public interface IEmailService {

    public Notificacion enviarCorreo(Notificacion notificacion);
} 