import styled from "styled-components";
import { forwardRef, HTMLInputTypeAttribute } from 'react'
import Label from "./Label";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  label?: string,
  id: string,
  type?: HTMLInputTypeAttribute
}

const InputWrapper = styled.div`
  padding-bottom: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
`

const StyledInput = styled.input`
  width: 100%;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  height: 40px;
  transition: 0.2s;
  padding: 0 15px;
  font-size: 16px;
  &:hover{
    border-color: #c0c4cc;
  }
  &:focus{
    border-color: #5f8fdf;
    outline: none;
  }
`
const HelpBlock = styled.div`
  color: #a94442;
  display: none;
  font-size: 0.8em;
  position: absolute;
  left: 0;
  bottom: 0;
  &.hasError{
    display: block;
  }
`

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, id, type = 'text',/* error, errorMessage, */ ...props }, ref) => {
  return <InputWrapper>
    {label && <Label id={id}>{label}</Label>}
    <StyledInput type={type} id={id} {...props} ref={ref} />
    <HelpBlock>Ошибка</HelpBlock>
  </InputWrapper>
})

export default Input;

Input.displayName = 'Input';