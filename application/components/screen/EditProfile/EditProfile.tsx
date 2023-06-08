import Link from 'next/link';
import Card from '../../UI/Card';
import Title from '../../UI/Title';
import style from './EditProfile.module.scss'

interface EditProfileProps {
  activeTab: 1 | 2 | 3 | 4,
  children: React.ReactNode
}

const EditProfile: React.FC<EditProfileProps> = ({ activeTab, children }) => {
  return <>
    <div className={style.wrapper}>
      <Title>Редактирование профиля</Title>
      <Card>
        <ul className={style.tabs}>
          <li><Link href="/profile/edit_1" className={`${style.tabLink} ${activeTab === 1 ? style.active : ''}`}>Личная информация</Link></li>
          <li><Link href="/profile/edit_2" className={`${style.tabLink} ${activeTab === 2 ? style.active : ''}`}>E-mail</Link></li>
          <li><Link href="/profile/edit_3" className={`${style.tabLink} ${activeTab === 3 ? style.active : ''}`}>Телефон</Link></li>
          <li><Link href="/profile/edit_4" className={`${style.tabLink} ${activeTab === 4 ? style.active : ''}`}>Пароль</Link></li>
        </ul>
        <div className={style.formWrapper}>
          { children }
        </div>
      </Card>
    </div>
  </>
}

export default EditProfile;