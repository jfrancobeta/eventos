package com.jfranco.evento.servicio.asistentes_servicio.models.entity;

import java.util.Date;


public class AsistenteDTO {
    
   
    private Long id;

    private Evento evento;

    private Long usuario_id;

    private Date date;

    
    public AsistenteDTO(Long id, Evento evento, Long usuario_id, Date date) {
        this.id = id;
        this.evento = evento;
        this.usuario_id = usuario_id;
        this.date = date;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Evento getEvento() {
        return evento;
    }

    public void setEvento(Evento evento) {
        this.evento = evento;
    }

    public Long getUsuario_id() {
        return usuario_id;
    }

    public void setUsuario_id(Long usuario_id) {
        this.usuario_id = usuario_id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }


    
}
