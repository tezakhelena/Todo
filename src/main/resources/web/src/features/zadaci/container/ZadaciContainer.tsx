import { useQuery } from "@tanstack/react-query";
import { Button, Card, Divider, Space } from "antd";
import { useForm } from "antd/es/form/Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FilterZadatakaRequest } from "../../../types/request-types";
import ZadaciService from "../service/ZadaciService";
import { ZadaciData } from "../view/ZadaciData";
import { ZadaciFilter } from "../view/ZadaciFilter";
import { setFilterZadaci } from "../../../store/slices/filteriSlice";

const ZadaciContainer = () => {
    const [form] = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fetchZadaci = (request: Partial<FilterZadatakaRequest>) => {
        const formData = form.getFieldsValue();
        
        dispatch(setFilterZadaci(formData));
        return ZadaciService.dohvatiZadatke(request).then((res) => res.data);
    }

    const { data, refetch } = useQuery({
        queryKey: ['zadaci'],
        queryFn: () => fetchZadaci(form.getFieldsValue()),
        retry: 0
    })

    const onFinish = () => {
        const formData = form.getFieldsValue();
        dispatch(setFilterZadaci(formData));
        fetchZadaci(formData);
        refetch();
    }
    
    return (
        <Card title={<Space>
            <p>Upravljanje zadacima</p>
            <Button onClick={() => navigate("/zadaci/dodaj")}>Dodaj</Button>
        </Space>} bordered={false}>
            <ZadaciFilter form={form} onFinish={onFinish} />
            <Divider />
            <ZadaciData data={data} />
        </Card>
    )
}

export default ZadaciContainer;