import style from './Auth.module.scss'
import logo from '@/public/img/logo.png'
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import AuthInput from '../../UI/AuthInput';
import Link from 'next/link';

const Auth: React.FC = () => {
  const { register, getValues } = useForm();

  return <div className={style.wrapper}>
    <form className={style.form}>
      <Image alt='Лого' src={logo} width={100} height={140} />
      <AuthInput id='login' label='Логин' {...register('login')} value={getValues('login')} />
      <AuthInput id='password' label='Пароль'{...register('password')} type="password" value={getValues('password')} />
      {/* <div className={style.checkboxWrapper}>
        <input id="remember" type="checkbox" className={style.checkbox} />
        <label htmlFor="remember" className={style.checkboxLabel}>Запомнить меня</label>
      </div> */}
      <button className={style.submit}>Войти</button>
      <Link className={style.forgotPassword} href="/forgot-password">Забыли пароль?</Link>
    </form>
  </div>
}

export default Auth;