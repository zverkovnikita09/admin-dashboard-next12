import {forwardRef} from 'react'
import styled from 'styled-components';
import Label from './Label';

interface TextAreaProps extends React.HTMLAttributes<HTMLTextAreaElement>{
  label: string,
  id: string
}

const StyledTextArea = styled.textarea`
  resize: none;
  overflow: auto;
  padding: 15px;
  height: 300px;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  margin-bottom: 5px;
  width: 100%;
  transition: 0.2s;

  &:hover{
    border-color: #c0c4cc;
  }

  &:focus{
    border-color: #5f8fdf
  }
`

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({label, id}, ref)=>{
  return <div>
    <Label id={id}>{label}</Label>
    <StyledTextArea id={id} ref={ref}/>
  </div>
})

export default TextArea;