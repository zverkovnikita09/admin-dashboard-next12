import style from './Pagination.module.scss'
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

interface PaginationProps{
  activeEl?: number,
  setActive?: ()=>void,
  length?: number
}

const Pagination:React.FC<PaginationProps> = ({activeEl, setActive, length})=>{
  return <ul className={style.wrapper}>
    <li className={style.arrow}><MdArrowBackIosNew size={18}/></li>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>...</li>
    <li>{length}</li>
    <li className={style.arrow}><MdArrowForwardIos size={18}/></li>
  </ul>
}

export default Pagination;