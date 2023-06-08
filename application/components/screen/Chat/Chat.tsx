import style from './Chat.module.scss'
import { CgSearch } from "react-icons/cg";
import { useState } from 'react';
import { IChatContacts } from '@/application/types/apiTypes';
import ContactItem from './ContactItem/ContactItem';
import MessagesPanel from './MessagesPanel/MessagesPanel';

interface ChatProps {
  contacts: IChatContacts[]
}

const Chat: React.FC<ChatProps> = ({ contacts }) => {
  const [currentCompanion, setCurrentCompanion] = useState();
  const [selected, setSelected] = useState<number>(NaN)

  return <div className={style.wrapper}>
    <section className={style.contacts}>
      <form className={style.contactSearch}>
        <CgSearch className={style.searchIcon} color="#c0c4cc" size={19} strokeWidth={1} />
        <input type="text" placeholder='Поиск' className={style.searchInput} />
      </form>
      <ul className={style.contactsContainer}>
        {contacts.map((contact, index) => {
          return <li key={index}>
            <ContactItem date={contact.date}
              active={selected === index}
              name={contact.name}
              surname={contact.surname}
              setSelected={() => setSelected(index)}>
              {contact.text}
            </ContactItem>
          </li>
        })}
      </ul>
    </section>
    <section className={style.messages}>
      {!isNaN(selected) ? <MessagesPanel /> :
        <div className={style.noSelectedMessages}>
          <p>Выберите собеседника <br /> c которым хотели бы начать диалог</p>
        </div>}
    </section>
  </div>
}

export default Chat;