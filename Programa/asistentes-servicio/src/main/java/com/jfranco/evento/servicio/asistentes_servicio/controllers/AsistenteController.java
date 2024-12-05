package com.jfranco.evento.servicio.asistentes_servicio.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.jfranco.evento.servicio.asistentes_servicio.models.entity.Asistente;
import com.jfranco.evento.servicio.asistentes_servicio.models.entity.Evento;
import com.jfranco.evento.servicio.asistentes_servicio.models.entity.Notificacion;
import com.jfranco.evento.servicio.asistentes_servicio.models.entity.Usuario;
import com.jfranco.evento.servicio.asistentes_servicio.models.services.IAsistenteService;
import com.jfranco.evento.servicio.asistentes_servicio.models.services.IEventoService;
import com.jfranco.evento.servicio.asistentes_servicio.models.services.INotificacionService;
import com.jfranco.evento.servicio.asistentes_servicio.models.services.IUsuarioService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;



@RestController
public class AsistenteController {
    
    @Autowired
    private IEventoService eventoService;

    @Autowired
    private IUsuarioService usuarioService;

    @Autowired
    private IAsistenteService asistenteService;

    @Autowired
    private INotificacionService notificacionService;

    @GetMapping("/listar")
    public ResponseEntity<?> findAll() {
        return ResponseEntity.ok(asistenteService.findAll());
    }

    @PostMapping("/crear")
    public ResponseEntity<?> save(@RequestHeader(name = "X-Username") String username,@RequestBody Asistente asistente) {
        System.out.println("username" + username);
        System.out.println("username" + asistente.getEvento_id());
        System.out.println("username" + username);
        Evento evento = eventoService.findById(asistente.getEvento_id());
        Usuario usuario = usuarioService.findByUsername(username);
        Asistente asistente2 = asistente;
        if (evento != null && usuario != null) {
            Notificacion notificacion = new Notificacion();
            asistente2.setUsuario_id(usuario.getId());
            notificacion.setCorreo(usuario.getEmail());
            notificacion.setMensaje("Te registrarte con exito al evento: " + evento.getDescripcion());
            notificacion.setTitulo("registro exitoso"); 
            notificacionService.enviarNotificacion(notificacion);
            return ResponseEntity.status(HttpStatus.CREATED).body(asistenteService.save(asistente2));
        }else{
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        
    }
    
    
}
