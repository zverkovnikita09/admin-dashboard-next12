import style from './Error404.module.scss'

const Error404:React.FC = ()=>{
  return <div className={style.wrapper}>
    <h1>404 Страница не найдена</h1>
    <p>
      Страница, на которую вы пытались перейти
      <br />
      не существует
    </p>
  </div>
}

export default Error404;