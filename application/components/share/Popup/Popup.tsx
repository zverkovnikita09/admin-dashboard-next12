import Portal from '../Portal/Portal';
import style from './Popup.module.scss'
import { HiXMark } from "react-icons/hi2";
interface PopupProps {
  isActive: boolean,
  children: React.ReactNode,
  setActive: (active: boolean)=>void
}

const Popup: React.FC<PopupProps> = ({ children, isActive, setActive }) => {
  return (
    <Portal>
      <div className={`${style.overlay} ${isActive ? style.active : ''}`} tabIndex={0} onClick={()=>setActive(false)}>
        <div className={style.content} onClick={e => e.stopPropagation()}>
          <button className={style.close}>
            <HiXMark size={15} strokeWidth={1.5} onClick={()=>setActive(false)}/>
          </button>
          {children}
        </div>
      </div>
    </Portal>
  )
}

export default Popup;