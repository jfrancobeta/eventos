package com.jfranco.evento.servicio.asistentes_servicio.models.entity;

import java.util.Date;

public class Notificacion {
    private Long id;
   
    private String correo;

    private String tipo;

    private String mensaje;

    private String titulo;

    private Date fechaEnvio;

    

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

   

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public Date getFechaEnvio() {
        return fechaEnvio;
    }

    public void setFechaEnvio(Date fechaEnvio) {
        this.fechaEnvio = fechaEnvio;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getMensaje() {
        return mensaje;
    }

    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

}
