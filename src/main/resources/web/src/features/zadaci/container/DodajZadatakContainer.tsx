import { Card } from "antd";
import { useForm } from "antd/es/form/Form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../store/store";
import ZadaciService from "../service/ZadaciService";
import { DodajZadatak } from "../view/DodajZadatak";

const DodajZadatakContainer = () => {
    const [form] = useForm();
    const navigate = useNavigate();
    const korisnikId = useSelector((state: RootState) => state.auth.korisnikId);


    const onFinish = async () => {
        const request = {
            ...form.getFieldsValue(),
            korisnikId
        }
        await ZadaciService.dodajZadatak(request).then(() => {
            navigate("/zadaci");
        })
    }

    return(
        <Card title="Kreiranje zadatka">
            <DodajZadatak form={form} onFinish={onFinish}/>
        </Card>
    )
}

export default DodajZadatakContainer;