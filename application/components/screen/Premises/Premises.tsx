import { useState } from 'react';
import TableFooter from '../../share/TableFooter/TableFooter';
import Card from '../../UI/Card';
import FilterButton from '../../UI/FilterButton';
import Input from '../../UI/Input';
import PurpleButton from '../../UI/PurpleButton';
import Select from '../../UI/Select';
import Title from '../../UI/Title';
import style from './Premises.module.scss'
import PremisesTable from './PremisesTable';

const Premises: React.FC = () => {
  const [isFilterOpen, setFilterOpen] = useState(false)
  return <>
    <div className={style.wrapper}>
      <Title>Помещения</Title>
      <section className={style.mainSection}>
        <FilterButton setOpen={() => setFilterOpen(pr => !pr)} />
        <form className={`${style.filterForm} ${isFilterOpen ? style.active : ''}`}>
            <Input id='id' label='ID' />
            <Input id='premisesNumber' label='Номер помещения' />
            <Select id='floor' label='Этаж'>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Select>
          <PurpleButton className={style.filterButton}>Применить</PurpleButton>
        </form>
        <Card className={style.table}>
          <PremisesTable />
          <TableFooter />
        </Card>
      </section>
    </div>
  </>
}

export default Premises;