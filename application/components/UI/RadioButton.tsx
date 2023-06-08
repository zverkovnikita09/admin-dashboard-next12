import { forwardRef } from "react";
import styled from "styled-components";

interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  id: string,
  name: string,
  value: string | number
}

const StatusCircle = styled.span`
  position: relative;
  border: 1px solid #dcdfe6;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  background-color: transparent;
  display: inline-block;
  margin: 0;
  margin-right: 10px;

&:after{
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #fff;
  content: "";
  position: absolute;
  left: calc(50% - 4px/2);
  top: calc(50% - 4px/2);
  transform: scale(0);
  transition: transform .15s ease-in;
}
`

const RadioLabel = styled.label`
  display: inline-flex;
  align-items: center;
  color: #606266;
  font-weight: 500;
  position: relative;
  cursor: pointer;
  font-size: 14px;
  margin-right: 30px;
  padding: 0 10px;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  height: 40px;
`

const RadioInput = styled.input`
  height: 1px !important;
  opacity: 0;
  top: 0;
  position: absolute;
  width: 1px !important;
  z-index: -1;
  margin: 0 !important;

  &:checked+label{
    border-color: #5f8fdf;
    color: #5f8fdf;
  }
  &:checked+label span {
    background-color: #5f8fdf;
    &:after{
      transform: scale(1);
    }
  }
`

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(({ id, label, name, value, ...props }, ref) => {
  return <>
    <RadioInput type="radio" id={id} value={value} ref={ref} {...props} name={name} />
    <RadioLabel htmlFor={id}>
      <StatusCircle />
      {label}
    </RadioLabel>
  </>
})

export default RadioButton;