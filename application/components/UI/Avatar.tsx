import styled from 'styled-components'
interface circleDivProps{
  size?: number;
  bgColor?: string,
  fontSize?: number
}
interface AvatarProps extends circleDivProps{
  children: React.ReactNode
}
const CircleDiv = styled.div<circleDivProps>`
  width: ${({size = 40})=>`${size}px`};
  height: ${({size = 40})=>`${size}px`};
  font-size: ${({fontSize = 14})=>`${fontSize}px`};
  display: grid;
  place-items: center;
  color: #fff;
  border-radius: 50%;
  font-weight: 600;
  background-color: ${({bgColor = '#5f8fdf'})=>bgColor};
`

const Avatar:React.FC<AvatarProps> = ({children, bgColor, size, fontSize})=>{
  return <CircleDiv bgColor={bgColor} fontSize={fontSize} size={size}>
    {children}
  </CircleDiv>
}

export default Avatar;