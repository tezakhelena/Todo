import axios from "axios";
import { KORISNICI_POST } from "../../../reusable-components/constants";
import { FilterKorisnikaRequest } from "../../../types/request-types";

class KorisniciService {
    getKorisnici(request?: Partial<FilterKorisnikaRequest>) {
        return axios.post(KORISNICI_POST, request);
    }
}

export default new KorisniciService;
