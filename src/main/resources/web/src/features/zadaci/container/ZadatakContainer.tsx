import { useParams } from "react-router-dom";
import { DetaljiZadatkaResponse } from "../../../types/types";
import ZadaciService from "../service/ZadaciService";
import { useQuery } from "@tanstack/react-query";
import ZadatakCard from "../view/ZadatakCard";
import { EmptyDataTable } from "../../../helpers/EmptyDataTable";

const ZadatakContainer = () => {
    const { zadatakId } = useParams();

    const fetchZadatak = async (zadatakId: number): Promise<DetaljiZadatkaResponse> => {
        const res = await ZadaciService.getZadatak(zadatakId);
        return res.data;
    }

    const { data: zadatak } = useQuery({
        queryKey: ['zadatak'],
        queryFn: () => fetchZadatak(Number(zadatakId)),
    })

    return (
        zadatak === undefined ? <EmptyDataTable message="Nema podataka"/> :
        <ZadatakCard zadatak={zadatak} />
    )
}

export default ZadatakContainer;