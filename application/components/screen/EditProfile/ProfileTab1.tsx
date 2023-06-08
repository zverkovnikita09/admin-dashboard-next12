import Input from "../../UI/Input";
import PurpleButton from "../../UI/PurpleButton";

const Tab1 = ()=>{
  return <form>
    <Input id="surname" label="Фамилия"/>
    <Input id="name" label="Имя"/>
    <Input id="middlename" label="Отчество"/>
    <PurpleButton>Сохранить</PurpleButton>
  </form>
}

export default Tab1;