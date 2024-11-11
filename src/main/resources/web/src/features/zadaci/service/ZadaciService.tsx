import axios from "axios";
import { AZURIRAJ_ZADATAK_POST, BRISANJE_ZADATKA_DELETE, DODAJ_ZADATAK_POST, ZADACI_POST, ZADATAK_GET } from "../../../reusable-components/constants";
import { DodajZadatakRequest, FilterZadatakaRequest, UrediZadatakRequest } from "../../../types/request-types";

class ZadaciService {
    dohvatiZadatke(request: Partial<FilterZadatakaRequest>){
        return axios.post(ZADACI_POST, request)
    }
    obrisiZadatak(zadatakId?: number | string){
        return axios.delete(BRISANJE_ZADATKA_DELETE + zadatakId);
    }
    dodajZadatak(request: DodajZadatakRequest){
        return axios.post(DODAJ_ZADATAK_POST, request);
    }
    dohvatiZadatak(zadatakId: number | null) {
        return axios.get(ZADATAK_GET + zadatakId);
    }
    azurirajZadatak(request: UrediZadatakRequest){
        return axios.post(AZURIRAJ_ZADATAK_POST, request);
    }
}

export default new ZadaciService();