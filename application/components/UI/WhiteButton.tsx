import styled from "styled-components";

interface WhiteButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  children: React.ReactNode
}

const StyledButton = styled.button`
  display: block;
  margin-top: 20px;
  background: #fff;
  border: 1px solid #dcdfe6;
  border-color: #dcdfe6;
  color: inherit;
  text-align: center;
  transition: .2s;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;

  &:hover{
    color: #5f8fdf;
    border-color: #cfddf5;
    background-color: #eff4fc;
  }
`

const WhiteButton: React.FC<WhiteButtonProps> = ({children, ...props}) => {
  return <StyledButton type="button" {...props}>{children}</StyledButton>
}

export default WhiteButton;