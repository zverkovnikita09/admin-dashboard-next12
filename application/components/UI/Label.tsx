import styled from "styled-components";

interface LabelProps{
  id?: string,
  children: React.ReactNode
}

const StyledLabel = styled.label`
  margin-bottom: 8px;
  display: block;
  font-size: 0.875em;
`

const Label:React.FC<LabelProps> = ({children, id})=>{
  return <StyledLabel htmlFor={id}>{children}</StyledLabel>
}

export default Label;