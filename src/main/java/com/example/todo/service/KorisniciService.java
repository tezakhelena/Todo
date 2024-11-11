package com.example.todo.service;

import com.example.todo.dto.request.AzurirajKorisnikaRequest;
import com.example.todo.dto.request.FilterKorisnikaRequest;
import com.example.todo.dto.request.RegistracijaRequest;
import com.example.todo.dto.response.DetaljiKorisnika;
import com.example.todo.dto.response.KorisniciList;
import com.example.todo.dto.response.ZadaciList;
import com.example.todo.model.Zadaci;

import java.util.List;

public interface KorisniciService {
    List<KorisniciList> dohvatiKorisnike(FilterKorisnikaRequest request);
    String registracija(RegistracijaRequest request);
    List<Zadaci> dohvatiZadatkeKorisnika(Long idKorisnika);
    DetaljiKorisnika dohvatiDetaljeKorisnika(Long idKorisnika);
    boolean azuriraj(AzurirajKorisnikaRequest request);
}
