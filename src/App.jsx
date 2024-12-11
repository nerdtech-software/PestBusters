import './App.css'
import AboutUs from './components/About'
import AskQuestion from './components/AskQuestion'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import NevBar from './components/NavBar'
import ServiceProvider from './components/ServiceProvider'
import ServiceTypes from './components/ServiceTypes'
import Testimonials from './components/Testimonials'
import WorkPrinciple from './components/WorkPrinciple'
function App() {
  // Import the custom CSS for perspective and backface-visibility

  return (
    <>
    <Header/>
    <NevBar/>
    <ServiceProvider/>
    <ServiceTypes/>
    <WorkPrinciple/>
    <AskQuestion/>
    <AboutUs/>
    <Gallery/>
    <Testimonials/>
    < CallToAction/>
    <Footer />
    </>
  )
}

export default App
