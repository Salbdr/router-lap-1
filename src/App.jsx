import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Nav  from './component/Nav'
// import  Login  from './component/Login'
import Page1  from './pages/Page1'
import Page2  from './pages/Page2'
import Page3  from './pages/Page3'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Nav/>
    <Login/>  */}

    <Page1/>
    <Page2/>
    <Page3/>

    </>
  )
}

export default App
