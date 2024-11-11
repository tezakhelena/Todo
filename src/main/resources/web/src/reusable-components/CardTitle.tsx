import { MoreOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps, Space, Tag } from "antd";
import { getTagColor, pretvoriUTekst } from "../helpers/HelperFunctions";
import { prioritet } from "../types/values";
import { StatusiComponent } from "./StatusiComponent";
import { Link } from "react-router-dom";
import { DetaljiZadatkaResponse } from "../types/types";

interface TaskCardProps {
    taskName?: string;
    onButtonClick?: () => void;
    prioritetId?: number;
    statusId?: number;
    zadatakId?: number;
    data?: DetaljiZadatkaResponse;
    obrisiZadatak: () => void;
}

export const CardTitle = ({ taskName, onButtonClick, prioritetId, statusId, zadatakId, data, obrisiZadatak }: TaskCardProps) => {

    const items: MenuProps['items'] = [
        {
            label: (
                <Link to={`/zadaci/detalji/${zadatakId}`} state={{ taskData: data }}>
                    <a>Uredi zadatak</a>
                </Link>
            ),
            key: '0',
        },
        {
            label: (
                <a>
                    Obriši zadatak
                </a>
            ),
            key: '1',
        },
        {
            label: (
                <a>
                    Odgodi zadatak
                </a>
            ),
            key: '2',
        }
    ];

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>{taskName}</span>
                <Tag color={getTagColor(prioritetId)}>{pretvoriUTekst(prioritetId, prioritet)}</Tag>
            </div>

            <Space>

                <StatusiComponent statusId={statusId} zadatakId={zadatakId} />
                <Button
                    type="default" danger
                    onClick={onButtonClick}
                >
                    Otkaži zadatak
                </Button>
                <Link to={`/zadaci/detalji/${zadatakId}`} state={{ taskData: data }}>
                    <Button>Uredi zadatak</Button>
                </Link>
                <Button onClick={() => obrisiZadatak()}>Obriši zadatak</Button>
                <Dropdown menu={{ items }}>
                    <Button
                        type="text"
                        icon={<MoreOutlined />}
                        onClick={onButtonClick}
                    >
                        Action
                    </Button>
                </Dropdown>
            </Space>


        </div>
    )
}