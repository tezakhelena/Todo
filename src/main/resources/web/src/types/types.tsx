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
  datumKreiranja: string;
  dostupnost: number;
  idPrioriteta: number;
  idStatusa: number;
  korisnickoIme: string;
  korisnikId: number;
  naziv: string;
  nazivPrioriteta: string;
  opis: string;
  rokZadatka: string;
  status: string;
  zadatakId: number;
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