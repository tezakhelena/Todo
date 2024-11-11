import { Button, Col, Form, FormInstance, Input, Row, Select } from "antd";
import { statusiKorisnika, uloge } from "../../../types/values";

interface Props {
    form: FormInstance<any>;
    onFinish?: () => void;
}

export const KorisniciFilter = ({ form, onFinish }: Props) => {
    return (
        <Form form={form} onFinish={onFinish}>
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
                    <Button htmlType="submit">Pretraži</Button>
                </Col>
            </Row>
        </Form>
    )
}