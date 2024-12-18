import AboutUs from "../components/About";
import AskQuestion from "../components/AskQuestion";
import CallToAction from "../components/CallToAction";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import GoogleReviews from "../components/GoogleReviews";
import Header from "../components/Header";
import Locations from "../components/Locations";
import NevBar from "../components/NavBar";
import PestControlSection from "../components/PestControlSection";
import ServiceProvider from "../components/ServiceProvider";
import ServiceTypes from "../components/ServiceTypes";
import WorkPrinciple from "../components/WorkPrinciple";
const Home = () => {
  return (
    <>
      <Header />
      <NevBar />
      <ServiceProvider />
      <div id="services">
<<<<<<< HEAD
=======
        {" "}
>>>>>>> 39447dbdaefd44cf195d7f939a47b95e0ad58da6
        <ServiceTypes />
      </div>
      <WorkPrinciple />
      <AskQuestion />
      <div id="about">
        <AboutUs />
      </div>
      <Gallery />
      <CallToAction />
      <Locations />
      <div id="contacts">
        <Contact />
      </div>
      <PestControlSection />
      <GoogleReviews/>
      <Footer />
    </>
  );
};

export default Home;
