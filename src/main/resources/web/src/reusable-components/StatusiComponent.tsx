import { Button, notification } from "antd";
import ZadaciService from "../features/zadaci/service/ZadaciService";
import { UrediZadatakRequest } from "../types/request-types";

interface Props{
    statusId?: number;
    zadatakId?: number;
}

export const StatusiComponent = ({statusId, zadatakId}: Props) => {

    const azurirajZadatak = async (newStatusId: number) => {
        const request: UrediZadatakRequest = {
            idStatusa: newStatusId,
            zadatakId: zadatakId
        }

        await ZadaciService.azurirajZadatak(request).then(() => {
            notification.success({message: "Ažuriranje statusa", description: "Status uspješno promijenjen."})
        })
    }

    return(
        <>
            {
                statusId === 4 ? 
                <Button onClick={() => azurirajZadatak(5)}>Započni zadatak</Button> :
                (statusId === 5 ? 
                    <Button onClick={() => azurirajZadatak(6)}>Stavi u završnu fazu</Button> :
                    <Button onClick={() => azurirajZadatak(7)}>Završi zadatak</Button>
                ) 

            }
        </>
    )
}