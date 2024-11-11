package com.example.todo.repository;
import com.example.todo.dto.response.KorisniciList;
import com.example.todo.dto.response.ZadaciList;
import com.example.todo.model.Korisnici;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface KorisniciRepository extends JpaRepository<Korisnici, Long> {

    Korisnici findByKorisnickoIme(String korisnickoIme);

    @Query(value = "SELECT " +
            "    k.korisnik_id as korisnikId, " +
            "    k.ime, " +
            "    k.prezime, " +
            "    k.korisnicko_ime as korisnickoIme, " +
            "    u.naziv_uloge as nazivUloge, " +
            "    s.vrijednost as status, " +
            "    s.status_id as idStatusa, " +
            "    u.uloga_id as idUloge " +
            "FROM  " +
            "    korisnici k " +
            "JOIN  " +
            "    uloga u ON k.uloga_id = u.uloga_id " +
            "LEFT JOIN statusi s ON k.status_id = s.status_id" +
            "    WHERE " +
            "    (CAST(:ime AS TEXT) IS NULL OR UPPER(k.ime) LIKE UPPER('%' || CAST(:ime AS TEXT) || '%')) " +
            "    AND (CAST(:prezime AS TEXT) IS NULL OR UPPER(k.prezime) LIKE UPPER('%' || CAST(:prezime AS TEXT) || '%')) " +
            "    AND (CAST(:korisnickoIme AS TEXT) IS NULL OR UPPER(k.korisnicko_ime) LIKE UPPER ('%' || CAST(:korisnickoIme AS TEXT) || '%')) " +
            "    AND (:idStatusa IS NULL OR k.status_id = :idStatusa) " +
            "    AND (:idUloge IS NULL OR k.uloga_id = :idUloge);",
            nativeQuery = true)
    List<KorisniciList> getAllKorisnici(
            @Param("ime") String ime,
            @Param("prezime") String prezime,
            @Param("korisnickoIme") String korisnickoIme,
            @Param("idStatusa") Long idStatusa,
            @Param("idUloge") Long idUloge
    );
}
