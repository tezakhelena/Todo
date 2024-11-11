import { useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import ZadaciService from "../service/ZadaciService";
import { DetaljiZadatka } from "../view/DetaljiZadatka";

const DetaljiZadatkaContainer = () => {
    const location = useLocation();
    const { zadatakId } = location.state;
    const navigate = useNavigate();

    const {data, refetch} = useQuery({
        queryKey: ['zadaci'],
        queryFn: () => fetchDetaljiZahtjeva(),
        retry: 0,
        refetchOnWindowFocus: false
    })

    const fetchDetaljiZahtjeva = async () => {
        const res = await ZadaciService.dohvatiZadatak(zadatakId);
        return res.data;
    }

    const obrisiZadatak = async () => {
        await ZadaciService.obrisiZadatak(zadatakId).then(() => navigate("/zadaci"));
    }

    return(
        <DetaljiZadatka data={data} obrisiZadatak={obrisiZadatak}/>
    )

}

export default DetaljiZadatkaContainer;