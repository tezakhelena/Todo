import { Button, Col, Form, FormInstance, Input, Row, Select } from "antd";
import { statusiKorisnika, uloge } from "../../../types/values";

interface Props {
    form: FormInstance<any>;
    onFinish?: () => void;
    resetFields?: () => void;
}

export const KorisniciFilter = ({ form, onFinish, resetFields }: Props) => {
    return (
        <Form form={form} onFinish={onFinish} onReset={resetFields}>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={6}>
                    <Form.Item name="ime">
                        <Input placeholder="Unesite ime" />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item name="prezime">
                        <Input placeholder="Unesite prezime" />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item name="korisnickoIme">
                        <Input placeholder="Unesite korisničko ime" />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item name="idUloge">
                        <Select options={uloge} placeholder="Odaberite ulogu" />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item name="idStatusa">
                        <Select options={statusiKorisnika} placeholder="Odaberite status korisnika" />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Button type="primary" htmlType="submit">Pretraži</Button>
                    <Button type="primary" danger style={{ marginLeft: '15px' }} htmlType="reset">Obriši</Button>
                </Col>
            </Row>
        </Form>
    )
}