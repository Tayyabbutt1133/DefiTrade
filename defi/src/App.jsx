import './App.css'
import About from './components/About'
import Devs from './components/Devs'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Subscribe from './components/Subscribe'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Devs />
      <Subscribe />
      <Footer/>
    </>
  )
}

export default App
