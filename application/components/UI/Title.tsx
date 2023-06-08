import styled from "styled-components";

interface TitleProps{
  children: React.ReactNode
}

const StyledTitle = styled.h1`
  text-shadow: 0 0 1px #f3f7fa, 0 0 1px #f3f7fa, 0 0 1px #f3f7fa, 0 0 1px #f3f7fa, 0 0 1px #f3f7fa, 0 0 1px #f3f7fa, 0 0 1px #f3f7fa, 0 1px 2px rgb(0 0 0 / 30%), 0 3px 9px rgb(0 0 0 / 10%);
  color: #4a596a;
  font-size: 32px;
  padding: 24px 0;
`

const Title:React.FC<TitleProps> = ({children})=>{
  return <StyledTitle>
    {children}
  </StyledTitle>
}

export default Title;