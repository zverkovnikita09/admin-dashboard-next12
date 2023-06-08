import Avatar from '@/application/components/UI/Avatar';
import { useState } from 'react';
import style from './MessagesPanel.module.scss'
import { HiOutlinePaperClip } from "react-icons/hi"; IoSend
import { IoSend } from "react-icons/io5";
import { FaBan } from "react-icons/fa";

const MessagesPanel: React.FC = () => {
  const [isOnline, setOnline] = useState<boolean>(true)
  const [isCancelActive, setCancelActive] = useState<boolean>(true)
  return <>
    <div className={style.header}>
      <Avatar fontSize={23} size={60}>ИИ</Avatar>
      <div className={style.userInfo}>
        <div className={style.userName}>Иванов Иван</div>
        <div className={`${style.status} ${isOnline ? style.online : ''}`}>
          <div className={style.indicator} />
          <p className={style.indicatorText}>{isOnline ? 'в сети' : 'не в сети'}</p>
        </div>
      </div>
    </div>
    <div className={style.container}>

    </div>
    <div className={style.panel}>
      <div className={style.addFile}>
        <label htmlFor="file">
          <HiOutlinePaperClip size={30} />
        </label>
        <input type="file" id='file' />
      </div>
      <div className={style.typeMessage}>
        <input type="text" placeholder="Написать сообщение" />
      </div>
      <button className={`${style.cancel} ${isCancelActive ? style.active : ''}`}>
        <FaBan size={26}/>
      </button>
      <button className={style.send}>
        <IoSend size={26}/>
      </button>
    </div>
  </>
}

export default MessagesPanel;