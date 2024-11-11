package com.example.todo.service.impl;
import com.example.todo.dto.request.AzurirajZadatakRequest;
import com.example.todo.dto.request.DodajZadatakRequest;
import com.example.todo.dto.request.FilterZadatakaRequest;
import com.example.todo.dto.response.DetaljiZadatakResponse;
import com.example.todo.dto.response.ZadaciList;
import com.example.todo.model.Korisnici;
import com.example.todo.model.Zadaci;
import com.example.todo.repository.KorisniciRepository;
import com.example.todo.repository.ZadaciRepository;
import com.example.todo.service.ZadaciService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

@Service
public class ZadaciServiceImpl implements ZadaciService {
    @Autowired
    ZadaciRepository zadaciRepository;

    @Autowired
    KorisniciRepository korisniciRepository;

    public List<ZadaciList> dohvatiZadatke(FilterZadatakaRequest request){
        return zadaciRepository.getAllZadaci(
                request.getNaziv(),
                request.getKorisnickoIme(),
                request.getIdPrioriteta(),
                request.getIdStatusa()
        );
    }

    public boolean dodajZadatak(DodajZadatakRequest request){
        Zadaci zadaci = new Zadaci();

        zadaci.setNaziv(request.getNaziv());
        zadaci.setOpis(request.getOpis());
        zadaci.setKorisnikId(request.getKorisnikId());
        zadaci.setPrioritetId(request.getIdPrioriteta());
        zadaci.setStatusId(4L);
        zadaci.setRokZadatka(request.getRokZadatka());
        zadaci.setDostupnost(request.getDostupnost());
        zadaci.setDatumKreiranja(LocalDate.now());

        zadaciRepository.saveAndFlush(zadaci);

        return true;
    }

    public boolean azurirajZadatak(AzurirajZadatakRequest request){
        Zadaci zadaci = zadaciRepository.findById(request.getZadatakId()).get();

        zadaci.setNaziv(request.getNaziv() == null ? zadaci.getNaziv() : request.getNaziv());
        zadaci.setOpis(request.getOpis() == null ? zadaci.getOpis() : request.getOpis());
        zadaci.setDostupnost(request.getDostupnost() == null ? zadaci.getDostupnost() : request.getDostupnost());
        zadaci.setStatusId(request.getIdStatusa() == null ? zadaci.getStatusId() : request.getIdStatusa());
        zadaci.setPrioritetId(request.getIdPrioriteta() == null ? zadaci.getPrioritetId() : request.getIdPrioriteta());
        zadaci.setRokZadatka(request.getRokZadatka() == null ? zadaci.getRokZadatka() : request.getRokZadatka());

        zadaciRepository.saveAndFlush(zadaci);

        return true;
    }

    public boolean obrisiZadatak(Long id) {
        if (zadaciRepository.existsById(id)) {
            zadaciRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public DetaljiZadatakResponse detaljiZadatka(Long zadatakId){
        DetaljiZadatakResponse response = new DetaljiZadatakResponse();
        Zadaci zadaci = zadaciRepository.findById(zadatakId).get();
        Korisnici korisnici = korisniciRepository.findById(zadaci.getKorisnikId()).get();

        response.setNaziv(zadaci.getNaziv());
        response.setOpis(zadaci.getOpis());
        response.setRokZadatka(zadaci.getRokZadatka());
        response.setKorisnickoIme(korisnici.getKorisnickoIme());
        response.setKorisnikId(zadaci.getKorisnikId());
        response.setDostupnost(zadaci.getDostupnost());
        response.setStatusId(zadaci.getStatusId());
        response.setPrioritetId(zadaci.getPrioritetId());
        response.setZadatakId(zadatakId);

        return response;
    }
}
