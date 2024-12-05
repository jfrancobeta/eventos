package com.jfranco.eventos.servicio.notificaciones_servicio.models.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.jfranco.eventos.servicio.notificaciones_servicio.models.entity.Notificacion;
import com.jfranco.eventos.servicio.notificaciones_servicio.models.services.IEmailService;

@Service
public class EmailServiceImpl implements IEmailService {

    @Autowired
    private JavaMailSender mailSender;

    public Notificacion enviarCorreo(Notificacion notificacion){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(notificacion.getCorreo());
        message.setSubject(notificacion.getTitulo());
        message.setText(notificacion.getMensaje());
        mailSender.send(message);
        return notificacion;
    }
    
}
