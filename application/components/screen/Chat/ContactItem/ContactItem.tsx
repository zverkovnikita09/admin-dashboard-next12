import { takeFirstLetter } from '@/application/utils/StringMethods';
import Avatar from '../../../UI/Avatar';
import style from './ContactItem.module.scss'

interface ContactItemProps {
  children: React.ReactNode,
  active?: boolean,
  name: string,
  surname: string,
  date: string,
  setSelected: () => void
}

const ContactItem: React.FC<ContactItemProps> = ({ children, active = false, name, surname, date, setSelected }) => {
  return <div className={`${style.wrapper} ${active ? style.active : ''}`} onClick={setSelected}>
    <Avatar size={45} fontSize={18}>
      {takeFirstLetter(name, surname)}
    </Avatar>
    <div className={style.main}>
      <div className={style.info}>
        <p className={style.name}>{name} {surname}</p>
        <p className={style.date}>{date}</p>
      </div>
      <div className={style.lastMessage}>
        {children ? children : <p className={style.voidChat}>Сообщений пока нет</p>}
      </div>
    </div>
  </div>
}

export default ContactItem;