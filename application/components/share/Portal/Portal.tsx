import {useState, useEffect} from 'react'
import { createPortal } from 'react-dom';

interface PortalProps {
  children: React.ReactNode
}

const Portal:React.FC<PortalProps> = ({children}) => {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(()=>{
    setMounted(true)
    return () => {
      setMounted(false)
    }
  },[])

  return mounted ? createPortal(children, document.querySelector('#portal')!) : null
}

export default Portal;