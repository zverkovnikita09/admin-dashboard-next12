import { PremisesType } from '@/application/types/formTypes';
import { useMemo, useState } from 'react';
import Confirm from '../../share/Confirm/Confirm';
import Popup from '../../share/Popup/Popup';
import SearchInput from '../../share/SearchInput/SearchInput';
import Sticker from '../../share/Sticker/Sticker';
import Card from '../../UI/Card';
import Input from '../../UI/Input';
import PurpleButton from '../../UI/PurpleButton';
import SubTitle from '../../UI/SubTitle';
import Title from '../../UI/Title';
import WhiteButton from '../../UI/WhiteButton';
import style from './EditHabitant.module.scss'
import { BsFillBuildingFill } from "react-icons/bs";
import RadioButton from '../../UI/RadioButton';
import Label from '../../UI/Label';
import { useForm } from 'react-hook-form';

interface EditHabitantProps {
  title: string,
  defaultPremises?: PremisesType[],
  allPremisesList?: PremisesType[]
}

const EditHabitant: React.FC<EditHabitantProps> = ({ title, allPremisesList = [], defaultPremises = [] }) => {
  const [isConfirmOpen, setConfirmOpen] = useState<boolean>(false);
  const [isPopupOpen, setPopupOpen] = useState<boolean>(false);
  const [premises, setPremises] = useState<PremisesType[]>(defaultPremises);

  const searchArray = useMemo(() => {
    return allPremisesList.map(item => ({ id: item.id, innerText: item.number }))
  }, [allPremisesList])

  const searchItems = useMemo(() => {
    return premises.map(item => ({ id: item.id, innerText: item.number }))
  }, [premises])

  const addPremises = (id: number) => {
    const item = allPremisesList.find(el => el.id === id);
    item && setPremises([...premises, item]);
    setPopupOpen(false);
  }

  const deletePremises = (id: number) => {
    const idx = premises.findIndex(el => el.id === id);
    const newPremises = [...premises.slice(0, idx), ...premises.slice(idx + 1)]
    setPremises(newPremises);
  }

  const { register } = useForm({defaultValues: {gender: 'male'}});

  return <>
    <Confirm onConfirm={() => { }} isActive={isConfirmOpen} setActive={setConfirmOpen}>
      Вы уверены, что хотите удалить данного жильца?
    </Confirm>
    <Popup isActive={isPopupOpen} setActive={setPopupOpen}>
      <div className={style.addPremises}>
        <SearchInput itemsList={searchArray} items={searchItems} onSelect={addPremises} />
      </div>
    </Popup>
    <div className={style.wrapper}>
      <Title>{title}</Title>
      <Card>
        <form className={style.form}>
          <SubTitle>Личная информация</SubTitle>
          <Input id="surname" label="Фамилия" />
          <Input id="name" label="Имя" />
          <Input id="middlename" label="Отчество" />
          <Input id="birthdate" label="Дата рождения" type="date" />
          <Label>Пол</Label>
          <div>
            <RadioButton label='Мужской'  {...register('gender')} value='male' id='male' />
            <RadioButton label='Женский' {...register('gender')} value='female' id='female' />
          </div>
          <SubTitle>Контактная информаци</SubTitle>
          <Input id="phone" label="Телефон" type="tel" />
          <Input id="email" label="E-mail" type="email" />
          <SubTitle>Помещения</SubTitle>
          <div className={style.premises}>
            {premises.length ? premises.map(premises => {
              return <Sticker onDelete={() => deletePremises(premises.id)} key={premises.id} avatar={<BsFillBuildingFill size={25} />}>
                <p className={style.premisesNumber}>Помещение {premises.number}</p>
                <p className={style.premisesInfo}>Этаж: {premises.floor}</p>
                <p className={style.premisesInfo}>Площадь: {premises.square}</p>
              </Sticker>
            }) : null}
          </div>
          <WhiteButton onClick={() => setPopupOpen(true)}>Добавить помещение</WhiteButton>
          <div className={style.buttonGroup}>
            <PurpleButton>Сохранить</PurpleButton>
            <WhiteButton onClick={() => setConfirmOpen(true)}>Удалить пользователя</WhiteButton>
          </div>
        </form>
      </Card>
    </div>
  </>
}

export default EditHabitant;