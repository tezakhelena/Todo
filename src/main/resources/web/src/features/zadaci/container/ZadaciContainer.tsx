import { useQuery } from "@tanstack/react-query";
import { Button, Card } from "antd";
import { useForm } from "antd/es/form/Form";
import { FilterZadatakaRequest } from "../../../types/request-types";
import ZadaciService from "../service/ZadaciService";
import { ZadaciFilter } from "../view/ZadaciFilter";
import { ZadaciTable } from "../view/ZadaciTable";
import { useNavigate } from "react-router-dom";

const ZadaciContainer = () => {
    const [form] = useForm();
    const navigate = useNavigate();

    const fetchZadaci = (request: Partial<FilterZadatakaRequest>) => {
        return ZadaciService.getZadaci(request).then((res) => res.data);
    }

    const { data, refetch } = useQuery({
        queryKey: ['zadaci'],
        queryFn: () => fetchZadaci(form.getFieldsValue()),
        retry: 0
    })

    const onFinish = () => {
        const formData = form.getFieldsValue();
        fetchZadaci(formData);
        refetch();
    }

    const resetFields = () => {
        form.resetFields();
        const formData = form.getFieldsValue();
        fetchZadaci(formData);
        refetch();
    }

    return (
        <Card title="Upravljanje zadacima" bordered={false}>
            <ZadaciFilter form={form} onFinish={onFinish} resetFields={resetFields}/>
            <Button type="primary" style={{ marginBottom: '15px' }} onClick={() => navigate("/zadatak/new")}>Novi zadatak</Button>
            <ZadaciTable data={data} />
        </Card>
    )
}

export default ZadaciContainer;