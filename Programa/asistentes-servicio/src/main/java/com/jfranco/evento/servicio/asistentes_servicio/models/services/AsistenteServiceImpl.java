package com.jfranco.evento.servicio.asistentes_servicio.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jfranco.evento.servicio.asistentes_servicio.models.entity.Asistente;
import com.jfranco.evento.servicio.asistentes_servicio.models.repository.AsistenteRepository;

@Service
public class AsistenteServiceImpl implements IAsistenteService {

    @Autowired
    private AsistenteRepository asistenteRepository;

    @Override
    public List<Asistente> findAll() {
        return asistenteRepository.findAll();
    }

    @Override
    public Asistente findById(Long id) {
        return asistenteRepository.findById(id).orElse(null);
    }

    @Override
    public Asistente save(Asistente asistente) {
        return asistenteRepository.save(asistente);
    }

    @Override
    public void deleteById(Long id) {
        asistenteRepository.deleteById(id);
    }
    
}
