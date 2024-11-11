import { Button, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { EmptyDataTable } from "../../../helpers/EmptyDataTable";
import { Korisnik } from "../../../types/types";
import { useNavigate } from "react-router-dom";

interface Props {
    data: Korisnik[];
}

export const KorisniciTable = ({ data}: Props) => {

    const navigate = useNavigate();

    const columns: ColumnsType<Korisnik> = [
        {
            title: 'Ime',
            dataIndex: 'ime',
            key: 'ime',
        },
        {
            title: 'Prezime',
            dataIndex: 'prezime',
            key: 'prezime',
        },
        {
            title: 'Korisničko ime',
            dataIndex: 'korisnickoIme',
            key: 'korisnickoIme',
        },
        {
            title: 'Uloga',
            dataIndex: 'nazivUloge',
            key: 'nazivUloge',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Detalji',
            render: (_: any, record: any) =>  (
                <Button onClick={() =>
                    navigate(`/korisnici/detalji/${record.korisnikId}`, {
                        state: {korisnikId: record.korisnikId}
                    })
                }>Detalji</Button>
            )
        },
    ];


    return (
        !Array.isArray(data) || data.length === 0 ? (
            <EmptyDataTable />
        )
            : (
                <Table dataSource={data} columns={columns} />
            )
                
    )
}