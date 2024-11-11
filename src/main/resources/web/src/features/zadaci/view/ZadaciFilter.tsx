import { Button, Col, DatePicker, Form, FormInstance, Input, Row, Select } from "antd";
import { prioritet, statusiZadataka } from "../../../types/values";

interface Props{
    form: FormInstance<any>;
    onFinish?: () => void;
}

export const ZadaciFilter = ({form, onFinish}: Props) => {
    return(
        <Form form={form} onFinish={onFinish}>
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
                        <Select options={prioritet} placeholder="Odaberite prioritet" />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item name="idStatusa">
                        <Select options={statusiZadataka} placeholder="Odaberite status zadatka" />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Button htmlType="submit">Pretraži</Button>
                </Col>
            </Row>
        </Form>
    )
}