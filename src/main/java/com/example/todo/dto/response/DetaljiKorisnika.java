package com.example.todo.dto.response;

import com.example.todo.model.Zadaci;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DetaljiKorisnika {
    private Long idKorisnika;
    private String korisnickoIme;
    private String ime;
    private String prezime;
    private Long statusId;
    private Long idUloge;
    private List<Zadaci> zadaciKorisnika;

}
