import { useState } from 'react';
import Confirm from '../../share/Confirm/Confirm';
import Card from '../../UI/Card';
import Input from '../../UI/Input';
import PurpleButton from '../../UI/PurpleButton';
import Title from '../../UI/Title';
import WhiteButton from '../../UI/WhiteButton';
import style from './EditNews.module.scss'

interface EditNewsProps {
  title: string,
  defaultValues?: any[]
}

const EditNews: React.FC<EditNewsProps> = ({ title, defaultValues = [] }) => {
  const [isConfirmOpen, setConfirmOpen] = useState<boolean>(false);
  return <>
    <Confirm onConfirm={() => { }} isActive={isConfirmOpen} setActive={setConfirmOpen}>
      Вы уверены, что хотите удалить данную новость?
    </Confirm>
    <div className={style.wrapper}>
      <Title>{title}</Title>
      <Card>
        <form className={style.form}>
          <Input id="title" label="Заголовок" />
          <Input id="text" label="Описание" />
          <Input id="slug" label="Slug" />
          <Input id="created_at" label="Дата создания" type="date" />
          <Input id="changed_at" label="Дата изменения" type="date" />
          <div className={style.buttonGroup}>
            <PurpleButton>Сохранить</PurpleButton>
            {defaultValues.length ? <WhiteButton>Удалить новость</WhiteButton>
              : null}
          </div>
        </form>
      </Card>
    </div>
  </>
}

export default EditNews;