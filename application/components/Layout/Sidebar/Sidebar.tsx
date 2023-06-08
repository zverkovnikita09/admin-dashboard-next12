import Link from 'next/link';
import { useRouter } from 'next/router';
import style from './Sidebar.module.scss'

interface ILinks {
  title: string,
  link: string
}

const Sidebar: React.FC = () => {
  const links: ILinks[] = [
    { title: 'Жильцы', link: '/habitants' },
    { title: 'Помещения', link: '/premises' },
    { title: 'Новости', link: '/news' },
    { title: 'Заявки', link: '/requests' },
    { title: 'Чат', link: '/chat' },
    { title: 'Информация об УК', link: '/information' },
  ]
  const router = useRouter();
  return <aside className={style.aside}>
    <ul>
      {links.map((link, index) => {
        return <li key={index}>
          <Link className={`${style.link} ${router.pathname === link.link ? style.activeLink : ''}`} href={link.link}>
            <p>{link.title}</p>
          </Link>
        </li>
      })}
    </ul>
  </aside>
}

export default Sidebar;