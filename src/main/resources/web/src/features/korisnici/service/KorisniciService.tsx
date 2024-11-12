import axios from "axios";
import { AZURIRAJ_KORISNIKA_POST, KORISNICI_POST, KORISNIK_GET } from "../../../reusable-components/constants";
import { AzurirajKorisnikaRequest, FilterKorisnikaRequest } from "../../../types/request-types";

class KorisniciService {
    getKorisnici(request?: Partial<FilterKorisnikaRequest>) {
        return axios.post(KORISNICI_POST, request);
    }

    getKorisnik(korisnikId: number) {
        return axios.get(KORISNIK_GET + korisnikId, {
            headers: {
                'ngrok-skip-browser-warning': 'true'
              }
        });
    }

    updateKorisnik(requestBody: AzurirajKorisnikaRequest) {
        return axios.post(AZURIRAJ_KORISNIKA_POST, requestBody);
    }
}

export default new KorisniciService;
