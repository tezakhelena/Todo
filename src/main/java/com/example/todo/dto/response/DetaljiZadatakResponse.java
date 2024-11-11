package com.example.todo.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DetaljiZadatakResponse {
    private Long zadatakId;
    private String naziv;
    private String opis;
    private Long korisnikId;
    private String korisnickoIme;
    private Long prioritetId;
    private Long statusId;
    private Integer dostupnost;
    private Date rokZadatka;
}
