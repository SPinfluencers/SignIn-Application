import { useState , useContext } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Login from './components/Login'
import { Auth } from './context/Authcontext'

function App() {
  const [count, setCount] = useState(0)
  const { isAuth, setisAuth } = useContext(Auth);

  return (
    <div className="App">
       <Navbar />
      {isAuth ? <Profile /> : <Login />}
    </div>
  )
}

export default App
