import { InformationType } from '@/application/types/formTypes';
import { useForm } from 'react-hook-form';
import Card from '../../UI/Card';
import Input from '../../UI/Input';
import PurpleButton from '../../UI/PurpleButton';
import Title from '../../UI/Title';
import style from './Information.module.scss'

interface InformationProps{
  defaultValues: InformationType
}

const Information:React.FC<InformationProps> = ({defaultValues})=>{
  const {register} = useForm<InformationType>({defaultValues})
  return <>
  <Title>Редактирование информации об УК</Title>
  <Card>
    <form className={style.form}>
      <div className={style.formGroup}>
        <Input id='address' {...register('address')} label="Адрес"/>
        <Input id='email' {...register('email')} label="Почта"/>
      </div>
      <div className={style.formGroup}>
        <Input id='phone' {...register('phone')} label="Телефон отдела продаж"/>
        <Input id='social' {...register('messenger')} label="Whatsapp/Viber"/>
      </div>
      <PurpleButton className={style.submitPutton}>Сохранить</PurpleButton>
    </form>
  </Card>
  </>
}

export default Information;