import React, { useEffect, useState } from 'react'
import Home from './pages/Home'

const App = () => {



  const [keyPress, setKeyPress] = useState({})
  const handleKeyPress = (e) => {
    setKeyPress(e)
  }

  const handleActions=(keyActions)=>{
    if(keyActions.ctrlKey){
      console.log(`ctrl ${keyActions.key}`)
    }else{
      console.log(keyActions.key)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)
  }, [])

  useEffect(() => {
    handleActions(keyPress);
  }, [keyPress])

  return (
    <div className='flex items-center justify-center h-[100vh] w-[100vw]'>
      <Home />
    </div>
  )
}

export default App