import { useQuery } from "@tanstack/react-query";
import { Button, Card, Form, Input, Select } from "antd";
import KorisniciService from "../service/KorisniciService";
import { useParams } from "react-router-dom";
import { DetaljiKorisnikaResponse } from "../../../types/types";
import { statusiKorisnika, uloge } from "../../../types/values";
import { KorisnikZadaci } from "../view/KorisnikZadaci";
import StatusiEnum from "../../../reusable-components/enums/StatusiEnum";

const KorisnikContainer = () => {
    const { korisnikId } = useParams();

    const fetchKorisnik = async (korisnikId: number): Promise<DetaljiKorisnikaResponse> => {
        const res = await KorisniciService.getKorisnik(korisnikId);
        return res.data;
    }

    const { data, refetch } = useQuery({
        queryKey: ['korisnik'],
        queryFn: () => fetchKorisnik(Number(korisnikId)),
    })
 
    const changeStatus = (idKorisnika: number, statusId: number) => {
        switch(statusId) {
            case 1:
                return <Button type="primary" danger style={{ marginBottom: '15px' }} onClick={() => blokirajKorisnika(idKorisnika)}>Blokiraj</Button>;
            case 2:
                return <Button type="primary" style={{ marginBottom: '15px' }} onClick={() => aktivirajKorisnika(idKorisnika)}>Aktiviraj</Button>;
        }
    }

    const blokirajKorisnika = async (idKorisnika: number) => {
        await KorisniciService.updateKorisnik({korisnikId: idKorisnika, statusId: StatusiEnum.BLOKIRAN});
        refetch();
    }

    const aktivirajKorisnika = async (idKorisnika: number) => {
        await KorisniciService.updateKorisnik({korisnikId: idKorisnika, statusId: StatusiEnum.AKTIVAN});
        refetch();
    }

    return (
        <Card title="Detalji o korisniku">
            { data === null || data === undefined ? "No data" : 
                <Form layout="vertical">
                    {changeStatus(data.idKorisnika, data.statusId)}
                    <Form.Item label="Ime" name="ime" initialValue={data.ime}>
                        <Input disabled />
                    </Form.Item>
                    <Form.Item label="Prezime" name="prezime" initialValue={data.prezime}>
                        <Input disabled />
                    </Form.Item>
                    <Form.Item label="Korisničko ime" name="korisnickoIme" initialValue={data.korisnickoIme}>
                        <Input disabled />
                    </Form.Item>
                    <Form.Item label="Uloga" name="uloga" initialValue={data.idUloge}>
                        <Select options={uloge} disabled />
                    </Form.Item>
                    <Form.Item label="Status" name="status" initialValue={data.statusId}>
                        <Select options={statusiKorisnika} disabled />
                    </Form.Item>
                    <KorisnikZadaci zadaci={data.zadaciKorisnika}/>
            </Form>
            }
        </Card>
    )
}

export default KorisnikContainer;