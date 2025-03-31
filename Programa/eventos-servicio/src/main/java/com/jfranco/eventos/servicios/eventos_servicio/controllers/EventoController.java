package com.jfranco.eventos.servicios.eventos_servicio.controllers;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.jfranco.eventos.evento_commons.models.Evento;
import com.jfranco.eventos.servicios.eventos_servicio.models.services.IEventoService;
import com.jfranco.eventos.servicios.eventos_servicio.models.services.IUsuarioService;

import jakarta.annotation.PostConstruct;

import org.springframework.web.bind.annotation.PutMapping;


@RestController
public class EventoController {
    
    @Autowired
    private IEventoService eventoService;

    @Autowired
    private IUsuarioService usuarioService;

    @GetMapping("/estado")
    public ResponseEntity<?> estado(){
        return ResponseEntity.ok(eventoService.findByEstadoTrue());
    }

    @GetMapping("/listar")
    public ResponseEntity<?> findAll(){
        return ResponseEntity.ok(eventoService.findAll());
    }

    @GetMapping("/listar/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id){
        Optional<Evento> evento = Optional.ofNullable(eventoService.findById(id));
        if (evento.isPresent()) {
            return ResponseEntity.ok(evento.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PostMapping("/crear")
    public ResponseEntity<?> crearEvento(@RequestHeader(name = "X-Username") String username,@RequestBody Evento cuerpo){
        Evento evento = cuerpo;
        System.out.println("=========================================");
        System.out.println("username: " + username);
        System.out.println("=========================================");
        evento.setUsuario(usuarioService.findByUsername(username).getId());
        return ResponseEntity.status(HttpStatus.CREATED).body(eventoService.save(evento));
    }

    @PutMapping("/crear/{id}")
    public ResponseEntity<?> EditarEvento( @PathVariable Long id, @RequestBody Evento entity) {
        Evento eventoExistente = eventoService.findById(id);
        if(eventoExistente != null){
            eventoExistente.setCapacidad(entity.getCapacidad());
            eventoExistente.setDescripcion(entity.getDescripcion());
            eventoExistente.setLugar(entity.getLugar());
            eventoExistente.setNombre(entity.getNombre());
            eventoExistente.setFecha(entity.getFecha());
            return ResponseEntity.status(HttpStatus.CREATED).body(eventoService.save(eventoExistente));
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<?> eliminar(@PathVariable Long id){
        Optional<Evento> evento = Optional.ofNullable(eventoService.findById(id));
        if(evento.isPresent()){
            eventoService.deleteById(id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();

        }
        else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }    


    @GetMapping("/total")
    public ResponseEntity<?> totalEventos(){
        return ResponseEntity.ok(eventoService.findAll().size());
    }

    @Scheduled(cron = "0 0 0 * * *")
    public void actualizarEstadoEventos(){
        eventoService.actualizarEstadoEventos();
    }

    @PostConstruct
    public void init(){
        eventoService.actualizarEstadoEventos();
    }
    
    
}
