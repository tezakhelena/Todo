package com.example.todo.service.impl;
import com.example.todo.dto.request.AzurirajKorisnikaRequest;
import com.example.todo.dto.request.FilterKorisnikaRequest;
import com.example.todo.dto.request.RegistracijaRequest;
import com.example.todo.dto.response.DetaljiKorisnika;
import com.example.todo.dto.response.KorisniciList;
import com.example.todo.dto.response.ZadaciList;
import com.example.todo.model.Korisnici;
import com.example.todo.model.Zadaci;
import com.example.todo.repository.KorisniciRepository;
import com.example.todo.repository.ZadaciRepository;
import com.example.todo.service.KorisniciService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KorisniciServiceImpl implements KorisniciService {

    @Autowired
    KorisniciRepository korisniciRepository;

    @Autowired
    ZadaciRepository zadaciRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    public List<KorisniciList> dohvatiKorisnike(FilterKorisnikaRequest request){
        return korisniciRepository.getAllKorisnici(
                request.getIme(),
                request.getPrezime(),
                request.getKorisnickoIme(),
                request.getIdStatusa(),
                request.getIdUloge()
        );
    }

    public String registracija(RegistracijaRequest request) {
        String encodedPassword = passwordEncoder.encode(request.getLozinka());
        Korisnici korisnici = new Korisnici();

        korisnici.setIme(request.getIme());
        korisnici.setPrezime(request.getPrezime());
        korisnici.setKorisnickoIme(request.getKorisnickoIme());
        korisnici.setUloga_id(2L);
        korisnici.setStatus_id(9L);
        korisnici.setLozinka(encodedPassword);

        korisniciRepository.saveAndFlush(korisnici);

        return "Uspješna registracija";
    }

    public List<Zadaci> dohvatiZadatkeKorisnika(Long idKorisnika){
        List<Zadaci> zadaci = zadaciRepository.findByKorisnikId(idKorisnika);

        return zadaci;
    }

    public DetaljiKorisnika dohvatiDetaljeKorisnika(Long idKorisnika) {
        DetaljiKorisnika response = new DetaljiKorisnika();
        Korisnici korisnik = korisniciRepository.findById(idKorisnika).get();
        List<Zadaci> zadaci = zadaciRepository.findByKorisnikId(idKorisnika);

        response.setIdKorisnika(idKorisnika);
        response.setIme(korisnik.getIme());
        response.setPrezime(korisnik.getPrezime());
        response.setKorisnickoIme(korisnik.getKorisnickoIme());
        response.setStatusId(korisnik.getStatus_id());
        response.setIdUloge(korisnik.getUloga_id());
        response.setZadaciKorisnika(zadaci);

        return response;
    }

    public boolean azuriraj(AzurirajKorisnikaRequest request){
        Korisnici korisnici = korisniciRepository.findById(request.getKorisnikId()).get();

        korisnici.setStatus_id(request.getStatusId());

        korisniciRepository.saveAndFlush(korisnici);

        return true;
    }

}
