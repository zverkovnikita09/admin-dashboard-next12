import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import style from './Layout.module.scss'
import { useRouter } from "next/router";

interface LayoutProps {
  children: React.ReactNode,
  withoutSidebar?: boolean
}

const Layout: React.FC<LayoutProps> = ({ children, withoutSidebar }) => {
  return <>
    <div className={style.wrapper}>
      <Header />
      <div className={style.mainContainer}>
        {withoutSidebar || <Sidebar />}
        <main className={style.main}>
          {children}
        </main>
      </div>
    </div>
  </>
}

export default Layout;