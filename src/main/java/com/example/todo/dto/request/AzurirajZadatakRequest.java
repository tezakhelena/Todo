package com.example.todo.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AzurirajZadatakRequest {
    private Long zadatakId;
    private String naziv;
    private String opis;
    private Long idPrioriteta;
    private Long idStatusa;
    private Integer dostupnost;
    private Date rokZadatka;
}
