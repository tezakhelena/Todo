import axios from "axios";
import { AZURIRAJ_KORISNIKA_POST, KORISNICI_POST, KORISNIK_GET } from "../../../reusable-components/constants";
import { AzurirajKorisnikaRequest, FilterKorisnikaRequest } from "../../../types/request-types";

class KorisniciService {
    getKorisnici(request?: Partial<FilterKorisnikaRequest>) {
        return axios.post(KORISNICI_POST, request);
    }
    getKorisnik(idKorisnika?: number | string) {
        return axios.get(KORISNIK_GET + idKorisnika);
    }
    azurirajKorisnik(request: AzurirajKorisnikaRequest) {
        return axios.post(AZURIRAJ_KORISNIKA_POST, request)
    }
}

export default new KorisniciService;
