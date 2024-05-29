import React, { useEffect,useState } from 'react'
import Home from './pages/Home'

const App = () => {

  

  const  [keyPress, setKeyPress] = useState([])

  useEffect(() => {
    document.addEventListener('keydown',(e)=>{
      setKeyPress((prev)=>[...prev,e.key])
      if(keyPress.length === 0){
        
        console.log('Hello')
      }else{
        console.log(keyPress)
      }
    })
  }, [])
  console.log(keyPress)
  return (
    <div className='flex items-center justify-center h-[100vh] w-[100vw]'>
     <Home/>
    </div>
  )
}

export default App