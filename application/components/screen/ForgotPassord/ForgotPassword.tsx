import Image from 'next/image';
import style from './ForgotPassword.module.scss'
import logo from '@/public/img/logo.png'
import AuthInput from '../../UI/AuthInput';
import { useEffect, useState } from 'react';

const ForgotPassword: React.FC = ()=>{
  const [timer, setTimer] = useState<number>(0);
  const [timerStarted, setTimerStarted] = useState<boolean>(false)

  useEffect(()=>{

  }, [])

  return <div className={style.wrapper}>
    <form className={style.form}>
      <Image alt='Лого' src={logo} width={100} height={140}/>
      <AuthInput id='phone' label='Телефон' type="tel"/>
      <AuthInput id='code' label='Код для восстановления' type="tel"/>
      <button className={style.submit}>Отправить</button>
      <button className={style.resendCode}>Отправить код повторно</button>
    </form>
  </div>
}

export default ForgotPassword;