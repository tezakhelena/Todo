package com.example.todo.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DodajZadatakRequest {
    private Long korisnikId;
    private String naziv;
    private String opis;
    private Date rokZadatka;
    private Long idPrioriteta;
    private Long idStatusa;
    private Integer dostupnost;
}
