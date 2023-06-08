import styled from "styled-components";
import { forwardRef, HTMLInputTypeAttribute } from 'react'

interface AuthInputProps extends React.HTMLAttributes<HTMLInputElement> {
  label: string,
  value?: string,
  type?: HTMLInputTypeAttribute,
  id: string
}

const AuthWrapper = styled.div`
  position: relative;
  margin-top: 16px;
  padding-bottom: 16px;
  font-size: 16px;
  width: 100%;
`
const AuthLabel = styled.label`
  position: absolute;
  left: 0;
  color: rgba(74, 89, 106, .4);
  line-height: 1;
  top: 5px;
  transition: linear 0.1s;
  cursor: text;
`

const StyledInput = styled.input`
  border: none;
  width: 100%;
  border-bottom: 2px solid rgba(74, 89, 106, .15);
  padding: 5px 0;
  font-size: 16px;

  &:focus{
    outline: none;
    border-color: #5f8fdf;
  }

  &:focus+label, &.filled {
    font-size: 14px;
    color: #5f8fdf;
    transform: translateY(-18px);
  }
`

const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>(({ id, label, value, type = 'text', ...props }, ref) => {
  return <AuthWrapper>
    <StyledInput type={type} id={id} className={value?.length ? 'filled' : ''} {...props} ref={ref} />
    <AuthLabel htmlFor={id}>{label}</AuthLabel>
  </AuthWrapper>
})

export default AuthInput;