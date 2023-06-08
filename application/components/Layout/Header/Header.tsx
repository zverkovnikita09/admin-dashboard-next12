import style from './Header.module.scss'
import Image from 'next/image';
import logoTree from '@/public/img/logo-tree.png'
import logoText from '@/public/img/logo-text.png'
import Link from 'next/link';
import Avatar from '../../UI/Avatar';
import { MouseEvent, useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import { RxExit } from 'react-icons/rx'

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const closeMenuHandler = () => {
    setMenuOpen(false)
    window.removeEventListener('click', closeMenuHandler)
  }

  const openMenuHandler = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    window.addEventListener('click', closeMenuHandler)
    setMenuOpen(pr=>!pr);
    e.stopPropagation()
  }

  return <header className={style.header}>
    <Link href='/' className={style.logoSection}>
      <Image src={logoTree} className={style.logoTree} width={50} height={60} alt="logo" />
      <Image className={style.logoText} src={logoText} width={80} height={40} alt="logo text" />
    </Link>
    <div className={style.userSection} >
      <p className={style.name}>Имя Фамилия</p>
      <button type='button' className={style.avatar} onClick={openMenuHandler}>
        <Avatar>ИФ</Avatar>
      </button>
      <ul className={`${style.userDropdown} ${menuOpen ? style.open : ''}`}>
        <li><Link href='/profile/edit_1'><FaRegUser />Профиль</Link></li>
        <li><Link href='/auth'><button type='button'><RxExit strokeWidth={0.5} />Выйти</button></Link></li>
      </ul>
    </div>
  </header>
}

export default Header;