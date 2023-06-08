import Card from '../../UI/Card';
import Input from '../../UI/Input';
import PurpleButton from '../../UI/PurpleButton';
import SubTitle from '../../UI/SubTitle';
import Title from '../../UI/Title';
import WhiteButton from '../../UI/WhiteButton';
import style from './EditPremises.module.scss'
import { useState, useMemo } from 'react'
import Confirm from '../../share/Confirm/Confirm';
import Sticker from '../../share/Sticker/Sticker';
import { HabitantType } from '@/application/types/formTypes';
import { takeFirstLetter } from '@/application/utils/StringMethods';
import Popup from '../../share/Popup/Popup';
import SearchInput from '../../share/SearchInput/SearchInput';

interface EditPremisesProps {
  defaultHabitants?: HabitantType[],
  allHabitantsList?: HabitantType[],
  title: string
}

const EditPremises: React.FC<EditPremisesProps> = ({ defaultHabitants = [], allHabitantsList = [], title }) => {
  const searchArray = useMemo(() => {
    return allHabitantsList.map(item => ({ id: item.id, innerText: `${item.name} ${item.surname}` }))
  }, [allHabitantsList])

  const [habitants, setHabitants] = useState<HabitantType[]>(defaultHabitants);
  const [isPopupOpen, setPopupOpen] = useState<boolean>(false);
  const [isConfirmOpen, setConfirmOpen] = useState<boolean>(false);

  const searchItems = useMemo(()=>{
    return habitants.map(item => ({ id: item.id, innerText: `${item.name} ${item.surname}` }))
  }, [habitants])

  const deleteHabitant = (id: number) => {
    const idx = habitants.findIndex(el => el.id === id);
    const newHabitans = [...habitants.slice(0, idx), ...habitants.slice(idx + 1)]
    setHabitants(newHabitans);
  }

  const addHabitant = (id: number) => {
    const item = allHabitantsList.find(el => el.id === id);
    item && setHabitants([...habitants, item]);
    setPopupOpen(false);
  }

  return <>
    <Confirm onConfirm={() => { }} isActive={isConfirmOpen} setActive={setConfirmOpen}>
      Вы уверены, что хотите удалить данное помещение?
    </Confirm>
    <Popup isActive={isPopupOpen} setActive={setPopupOpen}>
      <div className={style.addHabitant}>
        <SearchInput itemsList={searchArray} items={searchItems} onSelect={addHabitant} />
      </div>
    </Popup>
    <div className={style.wrapper}>
      <Title>{title}</Title>
      <Card>
        <form className={style.form}>
          <SubTitle>Основная информация</SubTitle>
          <Input id="premisesNumber" label="Номер помещения" />
          <Input id="floor" label="Этаж" />
          <Input id="square" label="Площадь" />
          <SubTitle>Жители</SubTitle>
          <div className={style.habitants}>
            {habitants.length ? habitants.map(habitant => {
              return <Sticker onDelete={() => deleteHabitant(habitant.id)} key={habitant.id} avatar={takeFirstLetter(habitant.name, habitant.surname)}>
                <p className={style.habitantName}>ФИО: {habitant.name} {habitant.surname}</p>
                <p className={style.habitantInfo}>Телефон: {habitant.phone}</p>
                <p className={style.habitantInfo}>Почта: {habitant.email}</p>
              </Sticker>
            }) : null}
          </div>
          <WhiteButton onClick={() => setPopupOpen(true)}>Добавить жильца</WhiteButton>
          <div className={style.buttongroup}>
            <PurpleButton>Сохранить</PurpleButton>
            <WhiteButton onClick={() => setConfirmOpen(true)}>Удалить помещение</WhiteButton>
          </div>
        </form>
      </Card>
    </div>
  </>
}

export default EditPremises;