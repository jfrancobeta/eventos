package com.jfranco.evento.servicio.asistentes_servicio.models.entity;
import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
public class Asistente {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long evento_id;

    private Long usuario_id;

    @Temporal(TemporalType.TIMESTAMP)
    private Date date;

    @PrePersist
    protected void onCreated(){
        this.date = new Date();
    }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getEvento_id() {
        return evento_id;
    }

    public void setEvento_id(Long evento_id) {
        this.evento_id = evento_id;
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
