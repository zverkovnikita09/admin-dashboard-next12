import styled from "styled-components"

interface PurpleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  children: React.ReactNode
}

const StyledButton = styled.button`
  display: block;
  background-color:#5f8fdf;
  color: #fff;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  transition: 0.1s;
  margin-top: 20px;

  &:hover{
    background: #7fa5e5;
  }
`

const PurpleButton:React.FC<PurpleButtonProps> = ({children, ...props})=>{
  return <StyledButton {...props}>{children}</StyledButton>
}

export default PurpleButton;