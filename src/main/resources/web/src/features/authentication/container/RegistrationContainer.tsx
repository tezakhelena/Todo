import { Form, notification } from "antd";
import { Registration } from "../view/Registration";
import AuthenticationService from "../service/AuthenticationService";

export const RegistrationContainer = () => {

    const [form] = Form.useForm();

    const onFinish = async () => {
        try {
            const formData = form.getFieldsValue();
            await AuthenticationService.registracija(formData).then(() => {
                notification.success({
                    message: 'Registracija',
                    description: 'Uspješno ste se registrirali, pričekajte da Vas admin odobri.',
                });
            })
        } catch (error: any) {
            notification.error({
                message: 'Login Failed',
                description: error.response?.data?.message || 'An error occurred during login.',
            });
        }
    };
    return(
        <Registration form={form} onFinish={onFinish}/>
    )
}