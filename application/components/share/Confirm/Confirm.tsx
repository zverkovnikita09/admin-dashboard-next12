import PurpleButton from "../../UI/PurpleButton";
import WhiteButton from "../../UI/WhiteButton";
import Popup from "../Popup/Popup";
import style from './Confirm.module.scss'
import { BsExclamationCircleFill } from "react-icons/bs";

interface ConfirmProps {
  children: React.ReactNode,
  onConfirm: ()=>void,
  isActive: boolean,
  setActive: (active: boolean)=>void
}

const Confirm: React.FC<ConfirmProps> = ({ children, onConfirm, isActive, setActive }) => {
  return <Popup isActive={isActive} setActive={setActive}>
    <div className={style.wrapper}>
      <div className={style.alert}>
        <BsExclamationCircleFill size={25} color="#f7ba2a" />
        <h3>Подтверждение</h3>
      </div>
      {children}
      <div className={style.buttonGroup}>
        <PurpleButton type="button" onClick={onConfirm}>Да</PurpleButton>
        <WhiteButton onClick={()=>setActive(false)}>Отмена</WhiteButton>
      </div>
    </div>
  </Popup>
}

export default Confirm;