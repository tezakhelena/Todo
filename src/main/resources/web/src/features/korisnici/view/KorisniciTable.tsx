import { Button, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useNavigate } from "react-router-dom";
import { EmptyDataTable } from "../../../helpers/EmptyDataTable";
import { Korisnik } from "../../../types/types";

interface Props {
    data: Korisnik[];
}

export const KorisniciTable = ({data}: Props) => {

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
            render: (_, record) => <Button onClick={() => navigate(`/korisnik/${record.korisnikId}`)}>Detalji</Button>
        }
    ];


    return (
        !Array.isArray(data) || data.length === 0 ? (
            <EmptyDataTable message="Trenutno nema korisnika"/>
        )
            : (
                <Table dataSource={data} columns={columns} />
            )
                
    )
}