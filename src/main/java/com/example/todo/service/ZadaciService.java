package com.example.todo.service;
import com.example.todo.dto.request.AzurirajZadatakRequest;
import com.example.todo.dto.request.DodajZadatakRequest;
import com.example.todo.dto.request.FilterZadatakaRequest;
import com.example.todo.dto.response.DetaljiZadatakResponse;
import com.example.todo.dto.response.ZadaciList;

import java.util.List;

public interface ZadaciService {
    List<ZadaciList> dohvatiZadatke(FilterZadatakaRequest request);
    boolean obrisiZadatak(Long zadatakId);
    boolean dodajZadatak(DodajZadatakRequest request);
    DetaljiZadatakResponse detaljiZadatka(Long zadatakId);
    boolean azurirajZadatak(AzurirajZadatakRequest request);
}
