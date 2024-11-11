import { Button, Col, DatePicker, Form, FormInstance, Input, Row, Select } from "antd";
import { dostupnost, prioritet } from "../../../types/values";

interface Props{
    form: FormInstance<any>;
    onFinish: () => void;
}

export const DodajZadatak = ({form, onFinish}: Props) => {
    return(
        <Form form={form} onFinish={onFinish}>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={6}>
                    <Form.Item name="naziv">
                        <Input placeholder="Unesite naziv" />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item name="opis">
                        <Input.TextArea placeholder="Unesite opis"  style={{width: "50%"}}/>
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item name="rokZadatka">
                        <DatePicker placeholder="Odaberite rok zadatka" style={{width: "100%"}}/>
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item name="idPrioriteta">
                        <Select options={prioritet} placeholder="Odaberite prioritet" />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item name="dostupnost">
                        <Select options={dostupnost} placeholder="Odaberite vidljivost zadatka" />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Button htmlType="submit">Spremi</Button>
                </Col>
            </Row>
        </Form>
    )
}