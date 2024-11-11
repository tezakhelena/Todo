package com.example.todo.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.time.LocalDate;

@Entity
@Table(name = "zadaci")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Zadaci {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "zadatak_id")
    private Long zadatakId;
    private String naziv;
    private String opis;
    @Column(name = "datum_kreiranja")
    private LocalDate datumKreiranja;

    @Column(name = "korisnik_id")
    private Long korisnikId;
    @Column(name = "prioritet_id")
    private Long prioritetId;
    private Integer dostupnost;
    @Column(name = "status_id")
    private Long statusId;

    @Column(name = "rok_dovrsenja")
    private Date rokZadatka;
}
