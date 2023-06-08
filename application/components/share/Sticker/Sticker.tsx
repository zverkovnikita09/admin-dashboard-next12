import Avatar from '../../UI/Avatar';
import style from './Sticker.module.scss'
import { HiOutlineXMark } from "react-icons/hi2";
import Card from '../../UI/Card';

interface StickerProps {
  children: React.ReactNode,
  avatar?: React.ReactNode,
  onDelete: ()=>void
}

const Sticker: React.FC<StickerProps> = ({ children, avatar, onDelete }) => {
  return <Card className={style.wrapper}>
    <button type='button' className={style.close} onClick={onDelete}>
      <HiOutlineXMark size={20} strokeWidth={2.5}/>
    </button>
    <div className={style.avatar}><Avatar size={45} fontSize={16}>{avatar}</Avatar></div>
    {children}
  </Card>
}

export default Sticker;