package com.jfranco.evento.servicio.usuario_servicio.controllers;


import org.aspectj.internal.lang.annotation.ajcITD;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.Optional;

import com.jfranco.evento.servicio.usuario_servicio.models.entity.Role;
import com.jfranco.evento.servicio.usuario_servicio.models.entity.Usuario;
import com.jfranco.evento.servicio.usuario_servicio.models.services.IUsuarioService;

@RestController
public class UsuarioController {
    
    @Autowired
    private IUsuarioService usuarioService;

    @Autowired
    private PasswordEncoder passwordEncoder;
    

    @GetMapping("/buscar/{username}")
    public ResponseEntity<?> findByUsername(@PathVariable String username){
        Optional<Usuario> usuario = usuarioService.findByUsername(username);
        if (usuario.isPresent()) {
            return ResponseEntity.ok(usuario.get());
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    

    @GetMapping("/listar")
    public ResponseEntity<?> findAll(){
        return ResponseEntity.ok(usuarioService.findAll());
    }

    @GetMapping("/listar/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id){
        Optional<Usuario> usuario = Optional.ofNullable(usuarioService.findById(id));
        if (usuario.isPresent()) {
            return ResponseEntity.ok(usuario.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PostMapping("/crearu")
    public ResponseEntity<?> crearEvento(@RequestBody Usuario cuerpo){
        Usuario usuario = cuerpo;
        usuario.setRoles(Arrays.asList(new Role(1L,"ROLE_USER")));
        usuario.setEnabled(true);
        usuario.setPassword(passwordEncoder.encode(cuerpo.getPassword()));
        return ResponseEntity.status(HttpStatus.CREATED).body(this.usuarioService.save(usuario));
    }

    @PutMapping("/crear/{id}")
    public ResponseEntity<?> EditarEvento(@PathVariable Long id, @RequestBody Usuario entity) {
        Usuario UsuarioExistente = usuarioService.findById(id);
        if(UsuarioExistente != null){
            UsuarioExistente.setApellido(entity.getApellido());
            UsuarioExistente.setEmail(entity.getEmail());
            UsuarioExistente.setNombre(entity.getNombre());
            UsuarioExistente.setUsername(entity.getUsername());
            return ResponseEntity.status(HttpStatus.CREATED).body(usuarioService.save(UsuarioExistente));
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<?> eliminar(@PathVariable Long id){
        Optional<Usuario> usuario = Optional.ofNullable(usuarioService.findById(id));
        if(usuario.isPresent()){
            usuarioService.deleteById(id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();

        }
        else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }    

    @DeleteMapping("/desactivar/{id}")
    public ResponseEntity<?> desactivar(@PathVariable Long id){
        Optional<Usuario> usuario = Optional.ofNullable(usuarioService.findById(id));
        if(usuario.isPresent()){
            usuario.get().setEnabled(false);
            usuarioService.save(usuario.get());
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();

        }
        else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PutMapping("/activar/{id}")
    public ResponseEntity<?> activar(@PathVariable Long id) {
        Optional<Usuario> usuario = Optional.ofNullable(usuarioService.findById(id));
        if(usuario.isPresent()){
            usuario.get().setEnabled(true);
            usuarioService.save(usuario.get());
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();

        }
        else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

}
