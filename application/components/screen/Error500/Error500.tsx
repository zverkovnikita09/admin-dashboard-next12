import style from './Error500.module.scss'

const Error500: React.FC = () => {
  return <div className={style.wrapper}>
    <h1>505 Внутренняя ошибка сервера</h1>
    <p>На сервере произошла непредвиденная ошибка.</p>
    <p className={style.smallText}>
      Обратитесь в веб-отдел <a href="mailto:web@gallery-chizhov.com">web@gallery-chizhov.com</a>
    </p>
  </div>
}

export default Error500;