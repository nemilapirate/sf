import Router from './router.jsx'
import Navbar from "./Components/Navbar/Navbar.jsx"
import Footer from './Components/Footer/Footer.jsx'
import Home from './Containers/Home/Home.jsx'
import './App.css'

function App() {

  return (
    <>
    <Navbar/>
     <Router>
     <Home/>
     </Router>
     <Footer/>
    </>
  )
}

export default App
