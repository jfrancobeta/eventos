package com.jfranco.evento.servicio.oauth_servicio.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.jfranco.evento.servicio.oauth_servicio.clients.UsuarioFeingClient;
import com.jfranco.evento.servicio.oauth_servicio.models.Usuario;

@Service
public class UsuarioService implements IUsuarioService, UserDetailsService{

    @Autowired
    private UsuarioFeingClient client;
    
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuario usuario = client.findByUsername(username);
        if(usuario == null){
			throw new UsernameNotFoundException("Error en el login, no existe el usuario '"+username+"' en el sistema");
        }
        List<GrantedAuthority> roles = usuario.getRoles()
                .stream()
                .map(role -> new SimpleGrantedAuthority(role.getNombre()))
                .collect(Collectors.toList());
        return new User(usuario.getUsername(), usuario.getPassword(), usuario.getEnabled(), true, true,true, roles);
    }

    @Override
    public Usuario findByUsername(String username) {
        return client.findByUsername(username);
    }
    
}
