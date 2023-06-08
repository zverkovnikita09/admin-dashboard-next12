import { forwardRef } from "react";
import styled from "styled-components";
import Label from "./Label";

interface SelectProps extends React.HTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode,
  label?: string,
  id: string
}

const StyledSelect = styled.select`
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  height: 40px;
  transition: 0.2s;
  padding: 0 15px;
  margin-bottom: 22px;
  width: 100%;
  cursor: pointer;
  background-color: transparent;

  &:hover{
    border-color: #c0c4cc;
  }
  &:focus{
    border-color: #5f8fdf;
    outline: none;
  }
`

const Select = forwardRef<HTMLSelectElement, SelectProps>(({ children, id, label }, ref) => {
  return <div>
    <Label id={id}>{label}</Label>
    <StyledSelect id={id}>{children}</StyledSelect>
  </div>
})

export default Select;