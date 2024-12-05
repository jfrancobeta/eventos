package com.jfranco.evento.servicio.oauth_servicio.models;

import java.util.List;

public class Usuario  {

	
	private Long id;

	
	private String username;

	
	private String password;

	private Boolean enabled;
	private String nombre;
	private String apellido;

	
	private String email;

	
	private List<Role> roles;

	private Integer intentos;

	public Integer getIntentos() {
		return intentos;
	}

	public void setIntentos(Integer intentos) {
		this.intentos = intentos;
	}

	public List<Role> getRoles() {
		return roles;
	}

	public void setRoles(List<Role> roles) {
		this.roles = roles;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Boolean getEnabled() {
		return enabled;
	}

	public void setEnabled(Boolean enabled) {
		this.enabled = enabled;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}


}

