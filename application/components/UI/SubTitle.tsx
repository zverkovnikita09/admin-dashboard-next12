import styled from "styled-components";

interface SubTitleProps {
  children: React.ReactNode
}

const StyledTitle = styled.h2`
  font-size: 24px;
  line-height: 1;
  text-shadow: 0 0 1px #f3f7fa, 0 0 1px #f3f7fa, 0 0 1px #f3f7fa, 0 0 1px #f3f7fa, 0 0 1px #f3f7fa, 0 0 1px #f3f7fa, 0 0 1px #f3f7fa, 0 1px 2px rgb(0 0 0 / 30%), 0 3px 9px rgb(0 0 0 / 10%);
  margin: 20px 0;
`

const SubTitle: React.FC<SubTitleProps> = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>
}

export default SubTitle;