import styled from "styled-components";
import { FaFilter } from "react-icons/fa";
import { AiOutlineCaretDown } from "react-icons/ai";

interface StyledButtonProps {
  top?: number,
  right?: number,
}

interface FilterButtonProps {
  setOpen?: () => void
}

const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  position: absolute;
  align-items: center;
  top: ${({ top = 0 }) => `${top}px`};
  right: ${({ right = 10 }) => `${right}px`};
  transform: translateY(calc(-100% - 10px));
  color: #5f8fdf;
  line-height: 1;
  font-size: 16px;

  &:hover{
    text-decoration: underline;
  }
`

const FilterButton: React.FC<FilterButtonProps> = ({ setOpen }) => {
  return <StyledButton onClick={setOpen}>
    <FaFilter size={16} />
    Фильтр
    <AiOutlineCaretDown size={16} />
  </StyledButton>
}

export default FilterButton;