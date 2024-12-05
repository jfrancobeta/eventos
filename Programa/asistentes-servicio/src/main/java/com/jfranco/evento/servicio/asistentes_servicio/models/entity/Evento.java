package com.jfranco.evento.servicio.asistentes_servicio.models.entity;


import java.util.Date;

 
public class Evento  {
    
    private Long id;

    private String nombre;

    private String descripcion;

    private Date fecha;
    
    private String Lugar;

    private Integer capacidad;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public String getLugar() {
        return Lugar;
    }

    public void setLugar(String lugar) {
        Lugar = lugar;
    }

    public Integer getCapacidad() {
        return capacidad;
    }

    public void setCapacidad(Integer capacidad) {
        this.capacidad = capacidad;
    }
}
