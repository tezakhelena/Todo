export interface Korisnik {
  korisnikId: number;
  ime: string;
  prezime: string;
  statusId: number;
  korisnickoIme: string;
  dUloge: number;
}

export interface DetaljiKorisnikaResponse {
  idKorisnika: number;
  ime: string;
  prezime: string;
  korisnickoIme: string;
  idUloge: number;
  statusId: number;
  zadaciKorisnika: Zadatak[];
}

export interface Zadatak{
    zadatakId: number;
    naziv: string;
    opis: string;
    korisnikId: number;
    korisnickoIme: string;
    nazivPrioriteta: string;
    idPrioriteta: string;
    dostupnost: number;
    status: string;
    idStatusa: number;
}

export interface SelectOption { //za filtere sa select poljem
  label: string;
  value: string | number;
}

export interface DetaljiZadatkaResponse {
  zadatakId: number;
  naziv: string;
  opis: string;
  korisnikId: number;
  korisnickoIme: string;
  prioritetId: number;
  statusId: number;
  dostupnost: number;
  rokZadatka: string;
}