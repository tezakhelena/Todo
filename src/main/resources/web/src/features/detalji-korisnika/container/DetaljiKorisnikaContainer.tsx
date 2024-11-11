import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { AzurirajKorisnikaRequest } from "../../../types/request-types";
import { DetaljiKorisnikaResponse } from "../../../types/types";
import KorisniciService from "../../korisnici/service/KorisniciService";
import ZadaciService from "../../zadaci/service/ZadaciService";
import { DetaljiKorisnika } from "../view/DetaljiKorisnika";
import { notification } from "antd";

const DetaljiKorisnikaContainer = () => {
    const location = useLocation();
    const { korisnikId } = location.state;

    const { data, refetch} = useQuery({
        queryKey: ['korisnik'],
        queryFn: () => fetchKorisnik(korisnikId),
        retry: 0
    })

    const fetchKorisnik = async (idKorisnika?: number | string): Promise<DetaljiKorisnikaResponse> => {
        const res = await KorisniciService.getKorisnik(idKorisnika);
        return res.data;
    }

    const obrisiZadatak = async (zadatakId: number) => {
        await ZadaciService.obrisiZadatak(zadatakId).then(() => refetch);
    }

    const azurirajKorisnika = async () => {
        const request: AzurirajKorisnikaRequest = {
            korisnikId: korisnikId,
            statusId: data?.statusId === 9 ? 1 : (data?.statusId === 1 ? 2 : 1),
        };
        await KorisniciService.azurirajKorisnik(request).then(() => {
            notification.success({message: "Ažuriranje korisnika", description: `Uspješno ${data?.statusId === 9 ? "odobren" : (data?.statusId === 1 ? "blokiran" : "aktiviran")} korisnik!`});
            refetch();
        })
    }

    return(
        <DetaljiKorisnika data={data} obrisiZadatak={obrisiZadatak} azurirajKorisnika={azurirajKorisnika}/>
    )
}

export default DetaljiKorisnikaContainer;