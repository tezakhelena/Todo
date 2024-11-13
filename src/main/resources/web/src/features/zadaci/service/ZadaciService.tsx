import axios from "axios";
import { AZURIRAJ_ZADATAK_POST, BRISANJE_ZADATKA_DELETE, DODAJ_ZADATAK_POST, ZADACI_POST, ZADATAK_GET } from "../../../reusable-components/constants";
import { DodajZadatakRequest, FilterZadatakaRequest, UrediZadatakRequest } from "../../../types/request-types";

class ZadaciService {
    getZadaci(request?: Partial<FilterZadatakaRequest>) {
        return axios.post(ZADACI_POST, request);
    }

    getZadatak(zadatakId: number) {
        return axios.get(ZADATAK_GET + zadatakId, {
            headers: {
                'ngrok-skip-browser-warning': 'true'
              }
        });
    }

    updateZadatak(request: UrediZadatakRequest) {
        return axios.post(AZURIRAJ_ZADATAK_POST, request);
    }

    deleteZadatak(zadatakId: number) {
        return axios.delete(BRISANJE_ZADATKA_DELETE + zadatakId);
    }

    createZadatak(request: DodajZadatakRequest) {
        return axios.post(DODAJ_ZADATAK_POST, request);
    }
}

export default new ZadaciService;