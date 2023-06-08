import styled from "styled-components";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const StyledCard = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 8px 16px 0 rgb(40 40 90 / 9%), 0 3px 6px 0 rgb(0 0 0 / 7%);
  overflow: auto;

  &:hover {
    scrollbar-color: #4a596a26 #4a596a0d;
    scrollbar-width: thin;
  }
  
  &:hover::-webkit-scrollbar-track {
    background-color: #4a596a0d;
  }
  
  &:hover::-webkit-scrollbar-thumb {
    background-color: #4a596a26;
  }
`

const Card: React.FC<CardProps> = ({children, ...props}) => {
  return <StyledCard {...props}>{children}</StyledCard>
}

export default Card;