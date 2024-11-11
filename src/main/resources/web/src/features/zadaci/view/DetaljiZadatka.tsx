import { Card } from "antd";
import { pretvoriUTekst } from "../../../helpers/HelperFunctions";
import { CardTitle } from "../../../reusable-components/CardTitle";
import { DetaljiZadatkaResponse } from "../../../types/types";
import { dostupnost, statusiZadataka } from "../../../types/values";

interface Props{
    data?: DetaljiZadatkaResponse;
    obrisiZadatak: () => void;
}

export const DetaljiZadatka = ({data, obrisiZadatak}: Props) => {

    return(
        <Card title={<CardTitle taskName={data?.naziv} prioritetId={data?.prioritetId} statusId={data?.statusId} zadatakId={data?.zadatakId} data={data} obrisiZadatak={obrisiZadatak}/>}>
            <p>{data?.opis}</p>
            <p><strong>Kreirao:</strong> {data?.korisnickoIme}</p>
            <p><strong>Rok zadatka: </strong>{data?.rokZadatka}</p>
            <p><strong>Vidljivost: </strong> {pretvoriUTekst(data?.dostupnost, dostupnost)}</p>
            <p><strong>Status: </strong>{pretvoriUTekst(data?.statusId, statusiZadataka)}</p>
        </Card>
    )

}