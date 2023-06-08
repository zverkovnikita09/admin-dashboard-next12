import Input from "../../UI/Input";
import PurpleButton from "../../UI/PurpleButton";

const Tab4 = ()=>{
  return <form>
    <Input label="Пароль" id="password"/>
    <Input label="Повторите пароль" id="passwordConfirm"/>
    <PurpleButton>Сохранить</PurpleButton>
  </form>
}

export default Tab4;