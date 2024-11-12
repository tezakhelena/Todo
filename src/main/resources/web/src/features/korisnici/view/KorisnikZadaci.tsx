import { Table } from "antd";
import { Zadatak } from "../../../types/types";
import { EmptyDataTable } from "../../../helpers/EmptyDataTable";
import { ColumnsType } from "antd/es/table";


interface Props {
    zadaci:  Zadatak[];
}

export const KorisnikZadaci = ({zadaci}: Props) => {

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
            title: 'Korisničko ime',
            dataIndex: 'korisnickoIme',
            key: 'korisnickoIme',
        },
        {
            title: 'Naziv prioriteta',
            dataIndex: 'nazivprioriteta',
            key: 'nazivprioriteta',
        },
        {
            title: 'Dostupnost',
            dataIndex: 'dostupnost',
            key: 'dostupnost',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
    ];

    return (
        !Array.isArray(zadaci) || zadaci.length === 0 ? (
            <EmptyDataTable message="Nema zadataka" />
        )
            : (
                <Table dataSource={zadaci} columns={columns} />
            )
                
    )
}