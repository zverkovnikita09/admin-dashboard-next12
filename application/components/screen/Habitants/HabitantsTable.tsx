import style from './Habitants.module.scss'

const HabitantsTable: React.FC = () => {
  return <div className={style.tableWrapper}>
    <div className={style.tableInner}>
      <ul className={style.tableHeader}>
        <li><button type='button'>ID</button></li>
        <li><button type='button'>Имя</button></li>
        <li><button type='button'>Фамилия</button></li>
        <li><button type='button'>Отчество</button></li>
        <li><button type='button'>Номер телефона</button></li>
        <li><button type='button'>Email</button></li>
        <li><button type='button'>Помещения</button></li>
        <li>Ред.</li>
      </ul>
      <div className={style.tableBody}>
        <ul className={style.tableRow}>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
}

export default HabitantsTable;