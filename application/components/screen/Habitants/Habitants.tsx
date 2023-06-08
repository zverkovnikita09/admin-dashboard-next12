import FilterButton from '../../UI/FilterButton';
import Title from '../../UI/Title';
import style from './Habitants.module.scss'
import HabitantsTable from './HabitantsTable';
import { useState } from 'react'
import Input from '../../UI/Input';
import Select from '../../UI/Select';
import PurpleButton from '../../UI/PurpleButton';
import TableFooter from '../../share/TableFooter/TableFooter';
import Card from '../../UI/Card';

const Habitants: React.FC = () => {
  const [isFilterOpen, setFilterOpen] = useState(false)
  return <>
    <div className={style.wrapper}>
      <Title>Жильцы</Title>
      <section className={style.mainSection}>
        <FilterButton setOpen={() => setFilterOpen(pr => !pr)} />
        <form className={`${style.filterForm} ${isFilterOpen ? style.active : ''}`}>
          <div>
            <Input id='id' label='ID' />
            <Input id='phone' label='Номер телефона' />
            <Input id='email' label='Email' />
            <Input id='premises' label='Номер помещения' />
          </div>
          <div>
            <Input id='last_name' label='Фамилия' />
            <Input id='first_name' label='Имя' />
            <Input id='middle_name' label='Отчество' />
          </div>
          <PurpleButton className={style.filterButton}>Применить</PurpleButton>
        </form>
        <Card className={style.table}>
          <HabitantsTable />
          <TableFooter />
        </Card>
      </section>
    </div>
  </>
}

export default Habitants;