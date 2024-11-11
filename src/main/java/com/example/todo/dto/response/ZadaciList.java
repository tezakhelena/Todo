package com.example.todo.dto.response;
import java.time.LocalDate;

public interface ZadaciList {
    Long getZadatakId();

    String getNaziv();
    String getOpis();
    LocalDate getDatumKreiranja();
    Long getKorisnikId();
    String getKorisnickoIme();
    String getNazivPrioriteta();
    Long getIdPrioriteta();
    Integer getDostupnost();
    String getStatus();
    Long getidStatusa();
    LocalDate getRokZadatka();
}
