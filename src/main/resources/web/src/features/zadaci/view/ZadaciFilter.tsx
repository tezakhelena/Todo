import { Button, Col, Form, FormInstance, Input, Row, Select } from "antd";
import { dostupnost, prioritet, statusiZadataka } from "../../../types/values";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import UlogaEnum from "../../../reusable-components/enums/UlogaEnum";

interface Props {
    form: FormInstance<any>;
    onFinish?: () => void;
    resetFields?: () => void;
}

export const ZadaciFilter = ({ form, onFinish, resetFields }: Props) => {
    const auth = useSelector((state: RootState) => state.auth);
    
    return (
        <Form form={form} onFinish={onFinish} onReset={resetFields}>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={6}>
                    <Form.Item name="naziv">
                        <Input placeholder="Unesite naziv" />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item name="korisnickoIme">
                        <Input placeholder="Unesite korisničko ime" />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item name="idPrioriteta">
                        <Select options={prioritet} placeholder="Odaberite prioritet zadatka" />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item name="idStatusa">
                        <Select options={statusiZadataka} placeholder="Odaberite status zadatka" />
                    </Form.Item>
                </Col>
                {auth.ulogaId === UlogaEnum.ADMINISTRATOR ? <Col span={6}>
                <Form.Item name="idStatusa">
                        <Select options={dostupnost} placeholder="Odaberite dostupnost zadatka" />
                    </Form.Item>
                </Col> : undefined}
                <Col span={6}>
                    <Button type="primary" htmlType="submit">Pretraži</Button>
                    <Button type="primary" htmlType="reset" danger style={{ marginLeft: '15px' }}>Obriši</Button>
                </Col>
            </Row>
        </Form>
    )
}