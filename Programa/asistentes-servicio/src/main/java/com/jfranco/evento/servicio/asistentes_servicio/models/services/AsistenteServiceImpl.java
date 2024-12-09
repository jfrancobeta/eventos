package com.jfranco.evento.servicio.asistentes_servicio.models.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jfranco.evento.servicio.asistentes_servicio.clients.EventosClienteFeing;
import com.jfranco.evento.servicio.asistentes_servicio.models.entity.Asistente;
import com.jfranco.evento.servicio.asistentes_servicio.models.entity.AsistenteDTO;
import com.jfranco.evento.servicio.asistentes_servicio.models.entity.Evento;
import com.jfranco.evento.servicio.asistentes_servicio.models.repository.AsistenteRepository;

@Service
public class AsistenteServiceImpl implements IAsistenteService {

    @Autowired
    private AsistenteRepository asistenteRepository;

    @Autowired
    private EventosClienteFeing eventosClienteFeing;

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

    @Override
    public List<AsistenteDTO> findAllbyUsername(Long id) {
        List<Asistente> asistentes = asistenteRepository.findByUsuarioId(id);
        return asistentes.stream().map(e -> {
            Evento evento = eventosClienteFeing.findById(e.getEvento_id());
            return new AsistenteDTO(
                e.getId(),
                evento,
                e.getUsuario_id(),
                e.getDate()
            );
            
        }).collect(Collectors.toList());
       
    }
    
}
