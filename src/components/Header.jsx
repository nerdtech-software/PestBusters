import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CallIcon from '@mui/icons-material/Call';
import CloseIcon from '@mui/icons-material/Close';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { images } from '../assets/image'; // Corrected import path

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Social Media Bar */}
     

      {/* Header Section */}
      <header className="bg-[#111216] shadow-xl mx-auto">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center py-1">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img
              src={images.logo} // Corrected image path
              alt="Pest Busters"
              className="h-16 rounded-sm w-40"
            />
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6 text-sm text-white">
            <div className="flex items-center space-x-2">
              <AccessTimeIcon className='text-white' />
              <p>Mon – Fri: 8AM – 5PM</p>
            </div>

            <div className="flex items-center space-x-2">
              <LocationOnIcon />
              <p>
                4707 Four Points Rd.
                <br />
                Deer Park, AL 36529
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <CallIcon className="text-orange-500" />
              <p>
                Call us:{" "}
                <a className="font-bold" href="tel:251-847-3226">
                  251-847-3226
                </a>
              </p>
            </div>
          </div>

         
          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2 rounded-lg "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Navbar */}
        <nav className="bg-orange text-white cursor-pointer">
          <div className="container mx-auto px-4 flex flex-wrap justify-between items-center cursor-pointer">
            {/* Desktop Navigation */}
            <ul className="hidden lg:flex flex-wrap space-x-4 lg:space-x-6">
              <li >
                <ScrollLink to="home" smooth={true} duration={500}>
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="about" smooth={true} duration={500}>
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="services" smooth={true} duration={500}>
                  Services
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="contacts" smooth={true} duration={500}>
                  Contacts
                </ScrollLink>
              </li>
            </ul>

            <button className="text-orange-500 p-2 rounded-lg hidden lg:block">
              <SearchIcon />
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden bg-orange p-4 cursor-pointer">
              <ul className="flex flex-col space-y-4">
                <li>
                  <ScrollLink to="home" smooth={true} duration={500}>
                    Home
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="about" smooth={true} duration={500}>
                    About
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="services" smooth={true} duration={500}>
                    Services
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="contacts" smooth={true} duration={500}>
                    Contacts
                  </ScrollLink>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Header;
