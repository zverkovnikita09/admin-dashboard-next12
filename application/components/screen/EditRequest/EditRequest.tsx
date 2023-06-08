import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../UI/Input';
import PurpleButton from '../../UI/PurpleButton';
import Select from '../../UI/Select';
import SubTitle from '../../UI/SubTitle';
import TextArea from '../../UI/TextArea';
import Title from '../../UI/Title';
import WhiteButton from '../../UI/WhiteButton';
import style from './EditRequest.module.scss'

interface EditRequestProps {
  title: string
}

const EditRequest: React.FC<EditRequestProps> = ({ title }) => {
  const [declarer, setDeclarer] = useState()
  const [executor, setExecutor] = useState()
  const {register} = useForm();
  return <>
    <div className={style.wrapper}>
      <Title>{title}</Title>
      <form className={style.form}>
        <div className={style.leftPart}>
          <Input label='Тема заявки' id='theme'/>
          <TextArea id='text' label='Текст заявки'/>
          <WhiteButton>Удалить заявку</WhiteButton>
        </div>
        <div className={style.rightPart}>
          <SubTitle>Заявка</SubTitle>
          <Input label='Дата постановки' id='created_at' type="datetime-local" />
          <Input label='Срок выполнения' id='execution' type="datetime-local" />
          <Select label='Статус' id='status'>
            <option value="В работе">В работе</option>
            <option value="Решена">Решена</option>
          </Select>
          <Select id='urgency' label='Срочность'>
            <option value="В работе">Высокая</option>
            <option value="Решена">Средняя</option>
            <option value="Решена">Низкая</option>
          </Select>
          <Select id='type' label='Тип заявки'>
            <option value=""></option>
          </Select>
          <SubTitle>Заявитель</SubTitle>
          <WhiteButton>Добавить</WhiteButton>
          <SubTitle>Исполнитель</SubTitle>
          <WhiteButton>Добавить</WhiteButton>
          <PurpleButton>Сохранить</PurpleButton>
        </div>
      </form>
    </div>
  </>
}

export default EditRequest;