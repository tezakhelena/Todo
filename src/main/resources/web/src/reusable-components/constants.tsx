const API = "http://localhost:8080/api";

export const KORISNICI_POST = API + "/korisnici"; //za dohvat liste korisnika
export const LOGIN_POST = KORISNICI_POST + "/login"; //za prijavu korisnika
export const REGISTRACIJA_POST = KORISNICI_POST + "/registracija"; //za registraciju korisnika

export const KORISNIK_GET = KORISNICI_POST + "/";  //za dohvat korisnika prema id, u KorisniciService prilikom poziva ovog endpointa poslati request
export const AZURIRAJ_KORISNIKA_POST = KORISNICI_POST + "/azuriraj"; //za azuriranje statusa korisnika (blokiran, ponovno aktivan)

export const ZADACI_POST = API + "/zadaci"; //za dohvat liste zadataka
export const ZADATAK_GET = ZADACI_POST + "/"; // za dohvat zadataka prema id, poslati request
export const DODAJ_ZADATAK_POST = ZADACI_POST + "/dodaj"; //za dodavanje novog zadatka
export const AZURIRAJ_ZADATAK_POST = ZADACI_POST + "/azuriraj"; //za azuriranje zadatka
export const BRISANJE_ZADATKA_DELETE = ZADACI_POST + "/brisanje/"; //za brisanje zadatka

//dodati endpoint za mijenjanje statusa