import { Helmet, HelmetProvider } from "react-helmet-async";
import AboutUs from "../components/AboutUs";
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
    <HelmetProvider>
      {/* Helmet Home - Pest Control Services */}
      <Helmet>
        <title>PestControl</title>
        <meta
          name="description"
          content="Professional pest control services for your home and office. Contact us for safe and reliable pest management solutions."
        />
        <meta
          name="keywords"
          content="pest control, pest management, pest removal, pest prevention"
        />
        <link
          rel="https://pestbusters.netlify.app/"
          href="https://pestbusters.netlify.app/"
        />
      </Helmet>

      {/* Page components */}
      <Header />
      <NevBar />
      <ServiceProvider />
      <div id="services">
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
      <GoogleReviews />
      <Footer />
    </HelmetProvider>
  );
};

export default Home;
