import { SelectOption } from "./types";

export const dostupnost: SelectOption[] = [ //isto napraviti za pretraživanje po statusu i prioritetu
    {value: 1, label: "Javno"},
    {value: 2, label: "Privatno"}
]

export const uloge: SelectOption[] = [
    {value: 1, label: "Administrator"},
    {value: 2, label: "Korisnik"}
]

export const statusiKorisnika: SelectOption[] = [
    {value: 1, label: "Aktivan"},
    {value: 2, label: "Blokiran"},
    {value: 9, label: "U provjeri"}
]

export const prioritet: SelectOption[] = [
    {value: 1, label: "Bez prioriteta"},
    {value: 2, label: "Nizak prioritet"},
    {value: 3, label: "Srednji prioritet"},
    {value: 4, label: "Visok prioritet"},
]

export const statusiZadataka: SelectOption[] = [
    {value: 3, label: "Odgođeno"},
    {value: 4, label: "Kreiran"},
    {value: 5, label: "U tijeku"},
    {value: 6, label: "U završnoj fazi"},
    {value: 7, label: "Završen"},
    {value: 8, label: "Otkazan"}
]