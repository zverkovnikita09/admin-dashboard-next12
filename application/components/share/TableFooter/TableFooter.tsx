import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsPlusLg } from 'react-icons/bs';
import PurpleButton from '../../UI/PurpleButton';
import Pagination from '../Pagination/Pagination';
import style from './TableFooter.module.scss'

interface TableFooterProps {
  addPath?: string,
  count?: number,
}

const TableFooter: React.FC<TableFooterProps> = ({addPath = 'new', count = 0}) => {
  const router = useRouter();

  return <div className={style.tableFooter}>
    <PurpleButton type="button" style={{ margin: 0, padding: 0, fontWeight: 700 }}>
      <Link href={`${router.pathname}/${addPath}`} style={{ padding: '12px 20px', display: 'flex', alignItems: 'center' }}>
        <BsPlusLg strokeWidth={2} style={{ marginRight: 5 }} /> Добавить
      </Link>
    </PurpleButton>
    <div className={style.footerRight}>
      <Pagination />
      <p className={style.count}>Всего: {count}</p>
    </div>
  </div>
}

export default TableFooter;