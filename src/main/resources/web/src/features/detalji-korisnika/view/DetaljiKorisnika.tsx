import { Button, Card, Descriptions, Divider, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import {  pretvoriUTekst } from "../../../helpers/HelperFunctions";
import { DetaljiKorisnikaResponse, Zadatak } from "../../../types/types";
import { dostupnost, prioritet, statusiKorisnika, statusiZadataka } from "../../../types/values";

interface Props {
    data?: DetaljiKorisnikaResponse;
    obrisiZadatak: (zadatakId: number) => void;
    azurirajKorisnika: () => void;
}

export const DetaljiKorisnika = ({ data, obrisiZadatak, azurirajKorisnika }: Props) => {

    const columns: ColumnsType<Zadatak> = [
        {
            title: 'Naziv',
            dataIndex: 'naziv',
            key: 'naziv',
        },
        {
            title: 'Opis',
            dataIndex: 'opis',
            key: 'opis',
        },
        {
            title: 'Prioritet',
            dataIndex: 'prioritet',
            key: 'prioritet',
            render: (_any, record: any) => pretvoriUTekst(record.prioritetId, prioritet)
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (_any, record: any) => pretvoriUTekst(record.statusId, statusiZadataka)
        },
        {
            title: 'Dostupnost',
            dataIndex: '',
            key: 'status',
            render: (_: any, record: any) => pretvoriUTekst(record.dostupnost, dostupnost)
        },
        {
            title: 'Obriši',
            render: (_: any, record: any) => <Button onClick={() => obrisiZadatak(record.zadatakId)}>Obriši</Button>
        },
    ];

    return (
        <Card bordered={false}>
            {
                data?.statusId === 9 ?
                <Button onClick={() => azurirajKorisnika()}>Odobri korisnika</Button> :
                (
                    data?.statusId === 1 ?
                    <Button onClick={() => azurirajKorisnika()}>Blokiraj</Button>
                    :
                    <Button onClick={() => azurirajKorisnika()}>Ponovno aktiviraj</Button>
                )
            }
            <Divider />
            <Descriptions bordered column={1}>
                <Descriptions.Item label="Ime">{data?.ime}</Descriptions.Item>
                <Descriptions.Item label="Prezime">{data?.prezime}</Descriptions.Item>
                <Descriptions.Item label="Korisničko ime">{data?.korisnickoIme}</Descriptions.Item>
                <Descriptions.Item label="Status">
                    {pretvoriUTekst(data?.statusId, statusiKorisnika)}
                </Descriptions.Item>
            </Descriptions>

            <Divider>Zadaci korisnika</Divider>

            <Table columns={columns} dataSource={data?.zadaciKorisnika}/>
        </Card>
    )
}