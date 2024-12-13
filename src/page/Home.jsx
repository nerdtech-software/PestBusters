
import AboutUs from '../components/About'
import AskQuestion from '../components/AskQuestion'
import CallToAction from '../components/CallToAction'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import Header from '../components/Header'
import Locations from '../components/Locations'
import NevBar from '../components/NavBar'
import ServiceProvider from '../components/ServiceProvider'
import ServiceTypes from '../components/ServiceTypes'
import Testimonials from '../components/Testimonials'
import WorkPrinciple from '../components/WorkPrinciple'
const Home = () => {
  return (
    <>
    <Header/>
    <NevBar/>
    <ServiceProvider/>
   <div id='services'> <ServiceTypes/></div>
    <WorkPrinciple/>
    <AskQuestion/>
    <div id="about">
        <AboutUs />
      </div>
    <Gallery/>
    <div id='team'><Testimonials/></div>
    < CallToAction/>
    <Locations />
  <div id='contacts'>
    <Contact />
    </div>

   
    <Footer />
    </>

  )
}

export default Home