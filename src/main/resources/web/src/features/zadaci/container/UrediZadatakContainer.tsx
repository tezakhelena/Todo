import { useForm } from "antd/es/form/Form";
import { useLocation } from "react-router-dom";
import { UrediZadatak } from "../view/UrediZadatak";

const UrediZadatakContainer = () => {

    const location = useLocation();
    const { zadatakId } = location.state;

    const [form] = useForm();

    const onFinish = () => {

    }

    return(
        <UrediZadatak form={form} onFinish={onFinish} />
    )
}

export default UrediZadatakContainer;