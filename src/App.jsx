
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Features from './components/Features'
import Hero from './components/Hero'
import NavBar from './components/Navbar'
import FloatingImage from './components/Story'

function App() {


  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <NavBar />
      <Hero />
      <About />
      <Features />
      <FloatingImage />
      <Contact />
    </main>
  )
}

export default App
