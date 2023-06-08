import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Input from "../../UI/Input";
import PurpleButton from "../../UI/PurpleButton";
import { BsFillInfoCircleFill } from "react-icons/bs";

const appearance = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1;
  }
`

const Info = styled.div`
  background-color: #f4f4f5;
  align-items: center;
  padding: 8px 16px;
  column-gap: 8px;
  border-radius: 4px;
  font-size: 13px;
  color: #909399;
  display: none;
  opacity: 0;
  animation: ${appearance} 0.5s forwards;

  &.shown{
    display: flex;
  }
`
const InfoTitle = styled.h3`
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 5px;
`

const Tab2 = () => {
  const [sent, setSent] = useState<boolean>(false);
  const [emailValue, setEmailValue] = useState()

  return <form>
    <Input id="email" label="E-mail" />
    <Info className={sent ? 'shown' : ''}>
      <BsFillInfoCircleFill size={28}/>
      <div>
        <InfoTitle>На e-mail {emailValue} было отправлено письмо для подтверждения</InfoTitle>
        <p>Перейдите по ссылке из этого письма, чтобы подтвердить e-mail адрес</p>
      </div>
    </Info>
    <PurpleButton>Сохранить</PurpleButton>
  </form>
}

export default Tab2;