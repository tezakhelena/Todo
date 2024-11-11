package com.example.todo.controller;
import com.example.todo.dto.request.AzurirajZadatakRequest;
import com.example.todo.dto.request.DodajZadatakRequest;
import com.example.todo.dto.request.FilterZadatakaRequest;
import com.example.todo.dto.response.DetaljiZadatakResponse;
import com.example.todo.dto.response.ZadaciList;
import com.example.todo.model.Zadaci;
import com.example.todo.service.ZadaciService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/zadaci")
@CrossOrigin
public class ZadaciController {
    @Autowired
    ZadaciService zadaciService;

    @PostMapping
    public List<ZadaciList> dohvatiZadatke(@RequestBody FilterZadatakaRequest request){
        return zadaciService.dohvatiZadatke(request);
    }

    @GetMapping("/{zadatakId}")
    public ResponseEntity<DetaljiZadatakResponse> detaljiZadatka(@PathVariable Long zadatakId){
        return ResponseEntity.ok(zadaciService.detaljiZadatka(zadatakId));
    }

    @PostMapping("/dodaj")
    public boolean dodajZadatak(@RequestBody DodajZadatakRequest request){
        return zadaciService.dodajZadatak(request);
    }

    @PostMapping("/azuriraj")
    public boolean azurirajZadatak(@RequestBody AzurirajZadatakRequest request){
        return zadaciService.azurirajZadatak(request);
    }

    @DeleteMapping("/brisanje/{zadatakId}")
    public ResponseEntity<String> deleteTask(@PathVariable Long zadatakId) {
        boolean isDeleted = zadaciService.obrisiZadatak(zadatakId);

        if (isDeleted) {
            return ResponseEntity.ok("Task deleted successfully");
        } else {
            return ResponseEntity.status(404).body("Task not found");
        }
    }
}
