import Input from "../../UI/Input";
import PurpleButton from "../../UI/PurpleButton";

const Tab3 = ()=>{
  return <form>
    <Input type="tel" label="Телефон" id="phone"/>
    <Input type="tel" label="Проверочный код" id="phone"/>
    <PurpleButton>Сохранить</PurpleButton>
  </form>
}

export default Tab3;