import { Moment } from "moment";

export interface FilterKorisnikaRequest {
    ime: string;
    prezime: string;
    korisnickoIme: string;
    idStatusa: number;
    idUloge: number;
}

export interface LoginRequest {
    korisnickoIme: string;
    lozinka: string;
}

export interface RegistracijaRequest {
    ime: string;
    prezime: string;
    korisnickoIme: string;
    lozinka: string;
}

export interface FilterZadatakaRequest {
    naziv: string;
    korisnikId: number;
    korisnickoIme: string;
    idPrioriteta: number;
    idStatusa: number;
}

export interface ZadatakRequest {
    naziv: string;
    korisnikId: number;
    opis: string;
    idPrioriteta: number;
    idStatusa: number;
    dostupnost: number;
}

export interface AzurirajKorisnikaRequest{
    korisnikId: number;
    statusId: number;
}

export interface DodajZadatakRequest{
    korisnikId: number;
    naziv: string;
    opis: string;
    rokZadatka: string;
    idPrioriteta: number;
    idStatusa: number;
    dostupnost: number;
}

export interface UrediZadatakRequest{
    zadatakId?: number;
    naziv?: string;
    opis?: string;
    idPrioriteta?: number;
    idStatusa?: number;
    dostupnost?: number;
    rokZadatka?: string;
}