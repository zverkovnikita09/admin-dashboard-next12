import TableFooter from '../../share/TableFooter/TableFooter';
import Card from '../../UI/Card';
import FilterButton from '../../UI/FilterButton';
import Title from '../../UI/Title'
import style from './Requests.module.scss'
import RequestsTable from './RequestsTable';
import { useState } from 'react'
import Input from '../../UI/Input';
import Select from '../../UI/Select';
import PurpleButton from '../../UI/PurpleButton';
const Requests: React.FC = () => {
  const [isFilterOpen, setFilterOpen] = useState(false)
  return <>
    <div className={style.wrapper}>
      <Title>Заявки</Title>
      <section className={style.mainSection}>
        <FilterButton setOpen={() => setFilterOpen(pr => !pr)} />
        <form className={`${style.filterForm} ${isFilterOpen ? style.active : ''}`}>
          <div>
            <Input id='id' label='ID' />
            <Input id='theme' label='Тема заявки' />
            <Input id='applicant' label='Заявитель' />
            <Input id='executor' label='Исполнитель' />
          </div>
          <div>
            <Input id='created_at' label='Дата постановки' type="datetime-local" />
            <Input id='execution' label='Срок выполнения' type="datetime-local" />
            <Select id='urgency' label='Срочность'>
              <option value="В работе">Высокая</option>
              <option value="Решена">Средняя</option>
              <option value="Решена">Низкая</option>
            </Select>
            <Select id='type' label='Тип заявки'>
              <option value=""></option>
            </Select>
          </div>
          <PurpleButton className={style.filterButton}>Применить</PurpleButton>
        </form>
        <Card className={style.table}>
          <RequestsTable />
          <TableFooter />
        </Card>
      </section>
    </div>
  </>
}

export default Requests;