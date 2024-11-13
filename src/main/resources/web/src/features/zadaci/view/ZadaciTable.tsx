import { Col, Flex } from "antd";
import { useNavigate } from "react-router-dom";
import { EmptyDataTable } from "../../../helpers/EmptyDataTable";
import { DetaljiZadatkaResponse, Zadatak } from "../../../types/types";
import ZadatakCard from "./ZadatakCard";

interface Props {
    data: Zadatak[];
}

export const ZadaciTable = ({data}: Props) => {

    const navigate = useNavigate();

    const zadakToDetaljiZadatkaResponse = (zadatak: Zadatak): DetaljiZadatkaResponse => {
        return {
            zadatakId: zadatak.zadatakId,
            naziv: zadatak.naziv,
            opis: zadatak.opis,
            korisnikId: zadatak.korisnikId,
            korisnickoIme: zadatak.korisnickoIme,
            prioritetId: zadatak.idPrioriteta,
            statusId: zadatak.idStatusa,
            dostupnost: zadatak.dostupnost,
            rokZadatka: zadatak.rokZadatka,
        };
    }

    return (
        !Array.isArray(data) || data.length === 0 ? (
            <EmptyDataTable message="Trenutno nema zadataka"/>
        )
            : (
                <Flex wrap gap="small">
                {data.map((zadatak) => 
                    <Col span={8}>
                        <ZadatakCard
                            key={zadatak.zadatakId}
                            onClick={() => navigate(`/zadatak/${zadatak.zadatakId}`)} 
                            disabled={true} 
                            zadatak={zadakToDetaljiZadatkaResponse(zadatak)} />
                    </Col>
                    )
                }
              </Flex>
            )  
    )
}