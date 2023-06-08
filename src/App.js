import React, { useContext, useEffect } from 'react'
import Landing from './pages/Landing'
import { AuthContext } from './Context/AuthContext'

const App = () => {
  const {connectWallet}=useContext(AuthContext);
  useEffect(()=>{
    connectWallet()
  },[])
  return (
    <>
     <Landing/>
    </>
  )
}

export default App