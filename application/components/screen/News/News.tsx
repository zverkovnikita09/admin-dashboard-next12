import { useState } from 'react';
import TableFooter from '../../share/TableFooter/TableFooter';
import Card from '../../UI/Card';
import FilterButton from '../../UI/FilterButton';
import Input from '../../UI/Input';
import PurpleButton from '../../UI/PurpleButton';
import Select from '../../UI/Select';
import Title from '../../UI/Title';
import style from './News.module.scss'
import NewsTable from './NewsTable';

const News: React.FC = () => {
  const [isFilterOpen, setFilterOpen] = useState(false)
  return <>
    <div className={style.wrapper}>
      <Title>Новости</Title>
      <section className={style.mainSection}>
        <FilterButton setOpen={() => setFilterOpen(pr => !pr)} />
        <form className={`${style.filterForm} ${isFilterOpen ? style.active : ''}`}>
          <div>
            <Input id='id' label='ID' />
            <Input id='title' label='Заголовок' />
            <Input id='slug' label='Slug' />
          </div>
          <div>
            <Select id='category' label='Категории жильцов'>
              <option value="">Выбрать категорию</option>
              <option value="Арендаторы">Арендаторы</option>
            </Select>
            <Input id='created_at' label='Дата постановки' type="date" />
            <Input id='execution' label='Срок выполнения' type="date" />
          </div>
          <PurpleButton className={style.filterButton}>Применить</PurpleButton>
        </form>
        <Card className={style.table}>
          <NewsTable />
          <TableFooter />
        </Card>
      </section>
    </div>
  </>
}

export default News;