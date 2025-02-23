import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import logo from './assets/shoping.svg'
import NavBar from './components/NavBar/NavBar'
import ProductList from './components/ProductList/ProductList'
import ProductPage from "./components/ProductPage/ProductPage";
import InfoPage from "./components/InfoPage/InfoPage";
function App() {
  
  return (
    <Router>
    <div>
      <header> 
        <img src={logo} alt="Логотип" className='logo'/>
        <h3>JOPA</h3>
      </header>
      < NavBar />
        <Routes>
          <Route path='/' element= {<ProductList/>} />
          <Route path='info/:name' element={<InfoPage />} />
          <Route path='/product/:id' element={<ProductPage/> } />
        </Routes>
    </div>
    </Router>
  )
}
export default App
