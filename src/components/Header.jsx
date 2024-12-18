import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CallIcon from '@mui/icons-material/Call';
import CloseIcon from '@mui/icons-material/Close';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useState } from 'react';
import { ScrollLink } from 'react-scroll';
import image from "../image/img.jpg";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div className="bg-black h-8  ">
        <div className='text-white justify-center items-center flex gap-4 '> 
        <FacebookIcon className='hover:text-orange' />
        <XIcon className='hover:text-orange'/>
        <YouTubeIcon className='hover:text-orange'/>
        <InstagramIcon className='hover:text-orange'/>
      </div>
      </div>
      <header className="bg-white shadow-xl mx-auto ">
        {/* Top Section */}
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center py-3">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img
              src={image}
              alt="Pest Busters"
              className="h-16 rounded-sm w-28"
            />
            <div>
              {/* <p className="text-sm text-gray-500">
                Pest Control <br /> Services
              </p> */}
            </div>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <AccessTimeIcon />
              <div>
                <p>Mon – Fri: 10AM – 7PM</p>
               
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <LocationOnIcon />
              <div>
                <p>4707 Four Points Rd. 
Deer Park, AL 36529
</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <CallIcon className="text-orange-500" />
              <div>
                <p>
                  Call us:<a className="font-bold" href="tel:251-847-3226">251-847-3226</a>
                </p>
              </div>
            </div>
          </div>
      

          {/* Appointment Button */}
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-orange hidden lg:block"><a  href="tel:+1234567890">Make an Appointment</a>
          
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-orange-500 p-2 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Navbar */}
        <nav className="bg-orange text-white">
          <div className="container mx-auto px-4 flex flex-wrap justify-between items-center ">
            {/* Desktop Navigation */}
            <ul className="hidden lg:flex flex-wrap space-x-4 lg:space-x-6">
            <li>
            <ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink>
          </li>
            <li>
            <ScrollLink to="contact" smooth={true} duration={500}>Contacts</ScrollLink>
          </li>
            <li>
            <ScrollLink to="service" smooth={true} duration={500}>Services</ScrollLink>
          </li>
          
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
             
             
             
              <li><a href="#contacts" className="hover:underline">Contacts</a></li>
            </ul>

            {/* Search Button */}
            <button className="text-orange-500 p-2 rounded-lg hidden lg:block">
              <SearchIcon />
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden bg-orange p-4">
              <ul className="flex flex-col space-y-4">
                <li><a href="#home" className="hover:underline">Home</a></li>
                <li><a href="#AboutUs" className="hover:underline">About</a></li>
                <li><a href="#services" className="hover:underline">Services</a></li>
                <li><a href="#projects" className="hover:underline">Projects</a></li>
                <li><a href="#team" className="hover:underline">Team</a></li>
                <li><a href="#blog" className="hover:underline">Blog</a></li>
                <li><a href="#contacts" className="hover:underline">Contacts</a></li>
              </ul>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Header;
