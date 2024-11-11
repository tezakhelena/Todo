import { useQuery } from "@tanstack/react-query";
import { Card } from "antd";
import { useForm } from "antd/es/form/Form";
import { useDispatch } from "react-redux";
import { FilterKorisnikaRequest } from "../../../types/request-types";
import KorisniciService from "../service/KorisniciService";
import { KorisniciFilter } from "../view/KorisniciFilter";
import { KorisniciTable } from "../view/KorisniciTable";
import { setFilterKorisnici } from "../../../store/slices/filteriSlice";

const KorisniciContainer = () => {
    const [form] = useForm();
    const dispatch = useDispatch();

    const fetchKorisnici = (request: Partial<FilterKorisnikaRequest>) => {
        const formData = form.getFieldsValue();
        dispatch(setFilterKorisnici(formData));
        return KorisniciService.getKorisnici(request).then((res) => res.data);
    }

    const { data, refetch } = useQuery({
        queryKey: ['korisnici'],
        queryFn: () => fetchKorisnici(form.getFieldsValue()),
        retry: 0
    })

    const onFinish = () => {
        const formData = form.getFieldsValue();
        dispatch(setFilterKorisnici(formData));
        fetchKorisnici(formData);
        refetch();
    }


    return (
        <Card title="Upravljanje korisnicima" bordered={false}>
            <KorisniciFilter form={form} onFinish={onFinish}/>
            <KorisniciTable data={data} />
        </Card>
    )
}

export default KorisniciContainer;