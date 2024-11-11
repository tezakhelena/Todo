import { Card, Col, Row } from "antd";
import { Zadatak } from "../../../types/types";
import { Link } from "react-router-dom";

interface Props {
    data: Zadatak[];
}

export const ZadaciData = ({ data }: Props) => {
    return (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {data?.map(zadatak => (
                <Col span={6}>
                    <Link to={`/zadaci/detalji/${zadatak.zadatakId}`} state={{ zadatakId: zadatak.zadatakId}}>
                        <Card>
                            <strong>{zadatak.naziv}</strong>
                            <p>{zadatak.opis}</p>
                        </Card>
                    </Link>
                </Col>
            ))}
        </Row>
    )
}