import { StrictMode, useContext, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

export const Context = useContext({isAuthenticated:false});
const AppWrapper = ()=>{
  const [isAuthenticated,setAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  return (
    <Context.provider>
      <App/>
    </Context.provider>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWrapper/>
  </StrictMode>,
)
