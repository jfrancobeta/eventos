package com.jfranco.evento.servicio.asistentes_servicio.models.services;

import java.util.List;

import com.jfranco.evento.servicio.asistentes_servicio.models.entity.Asistente;
import com.jfranco.evento.servicio.asistentes_servicio.models.entity.AsistenteDTO;



public interface IAsistenteService {
    
    public List<Asistente> findAll();

    public List<AsistenteDTO> findAllbyUsername(Long id);

    public Asistente findById(Long id);

    public Asistente save(Asistente asistente);


    public void deleteById(Long id);
}
