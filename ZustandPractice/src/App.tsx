import LoginPage from "./Pages/LoginPage"
import './App.css'
import HomePage from "./Pages/HomePage"
import title from './assets/title.png'
import { Routes,Route } from "react-router-dom"

const App = () => {
  return (
    


    <div className="full">
      <header>
        <img className='title' src={title}/>
     
      </header>
      <Routes>
        <Route path= '/' element={<HomePage />} />
        <Route path= 'login' element={<LoginPage />} />
      </Routes>
      </div>
  )
}

export default App