import { Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Placeorder from './pages/PlaceOrder/Placeorder'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import Loginpop from './components/LoginPopup/Loginpop'
import Verify from './pages/Verify/Verify'
import Myorder from './pages/myorders/Myorder'

function App() {
  const [showLogin,setShowLogin] = useState(false)
 

  return (
    <>
    {showLogin?<Loginpop setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Placeorder/>}/>
      <Route path='/verify' element={<Verify/>}/>
      <Route path='/myorders' element={<Myorder/>}/>
      </Routes>
     
    </div>
     <Footer/>
  </>
    )
}

export default App
