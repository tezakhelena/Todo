import { Button, Card, Form, Input, Modal, Select } from "antd";
import { dostupnost, prioritet, statusiZadataka } from "../../../types/values";
import { FormInstance } from "antd/es/form/Form";
import { useState } from "react";
import { DetaljiZadatkaResponse, Korisnik } from "../../../types/types";
import ZadaciService from "../service/ZadaciService";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import UlogaEnum from "../../../reusable-components/enums/UlogaEnum";
import KorisniciService from "../../korisnici/service/KorisniciService";

interface Props {
    zadatak?: DetaljiZadatkaResponse;
    disabled?: boolean;
    onClick?: () => void;
    form?: FormInstance<any>;
}

const ZadatakCard = ({ zadatak, disabled, onClick}: Props) => {
    const auth = useSelector((state: RootState) => state.auth);

    const [isUpdateBtnDisabled, setIsUpdateBtnDisabled] = useState<boolean>(true);
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const updateZadatak = async () => {
        const formData = form?.getFieldsValue();
        await ZadaciService.updateZadatak({zadatakId: zadatak?.zadatakId, ...formData});
        navigate("/zadaci");
    }

    const deleteZadatak = async () => {
        setModalText('Brisanje zadatka...');
        setConfirmLoading(true);
        await ZadaciService.deleteZadatak(zadatak!.zadatakId);
        setOpen(false);
        setConfirmLoading(false);
        navigate(`/zadaci`);
    }

    const createZadatak = async () => {
        const formData = form?.getFieldsValue();
        const korisnici = (await KorisniciService.getKorisnici({})).data as Korisnik[];
        const korisnik = korisnici.find(korisnik => korisnik.korisnickoIme === formData.korisnickoIme);
        if(korisnik === undefined) {
            // TODO handle error
            console.log("user not found");
            return;
        }
        await ZadaciService.createZadatak({
            korisnikId: korisnik!.korisnikId,
            naziv: formData.naziv,
            opis: formData.opis,
            rokZadatka: formData.rokZadatka,
            idPrioriteta: formData.idPrioriteta,
            idStatusa: formData.idStatusa,
            dostupnost: formData.dostupnost
        });
        navigate("/zadaci");
    }

    const enableUpdateBtn = () => {
        setIsUpdateBtnDisabled(false);
    }

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Jeste li sigurni da želite obrisati zadatak?');

    const showModal = () => {
        setOpen(true);
    };

    return (
        <Card onClick={onClick} title="Zadatak">
            <Form form={form} onValuesChange={enableUpdateBtn} onFinish={updateZadatak} layout="vertical">
                <Form.Item label="Naziv" name="naziv" initialValue={zadatak?.naziv}>
                    <Input disabled={disabled} />
                </Form.Item>
                <Form.Item label="Opis" name="opis" initialValue={zadatak?.opis}>
                    <Input.TextArea disabled={disabled} rows={3} />
                </Form.Item>
                <Form.Item label="Korisničko ime" name="korisnickoIme" initialValue={zadatak?.korisnickoIme}>
                    <Input disabled={disabled} />
                </Form.Item>
                <Form.Item label="Prioritet" name="idPrioriteta" initialValue={zadatak?.prioritetId}>
                    <Select disabled={disabled} options={prioritet} />
                </Form.Item>
                <Form.Item label="Status" name="idStatusa" initialValue={zadatak?.statusId}>
                    <Select disabled={disabled} options={statusiZadataka} />
                </Form.Item>
                <Form.Item label="Dostupnost" name="dostupnost" initialValue={zadatak?.dostupnost}>
                    <Select disabled={disabled} options={dostupnost} />
                </Form.Item>
                <Form.Item label="Rok zadatka" name="rokZadatka" initialValue={zadatak?.rokZadatka}>
                    <Input disabled={disabled} type="date" />
                </Form.Item>
                
                { disabled || zadatak === undefined || auth.korisnikId !== zadatak.korisnikId ? undefined : <Button type="primary" htmlType="submit" style={{ marginRight: '15px' }} disabled={isUpdateBtnDisabled}>Ažuriraj</Button> }
                { disabled || zadatak === undefined || (auth.korisnikId !== zadatak.korisnikId && auth.ulogaId !== UlogaEnum.ADMINISTRATOR) ? undefined : <Button type="primary" danger onClick={showModal}>Obriši</Button> }
                { disabled || zadatak !== undefined ? undefined : <Button type="primary" onClick={createZadatak}>Dodaj</Button> }
                <Modal
                    title="Brisanje zadatka"
                    open={open}
                    onOk={deleteZadatak}
                    confirmLoading={confirmLoading}
                    onCancel={() => setOpen(false)}
                >
                    <p>{modalText}</p>
                </Modal>
            </Form>
        </Card>
    )
}

export default ZadatakCard;