import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
const Header = () => {
  return (
    <div>   <div className='bg-black h-8'></div>
    <header className="bg-white shadow-xl mx-20 my-10">
    
      <div className="  container mx-auto px-4 flex justify-between items-center py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2 ">
          <img src="https://ld-wp73.template-help.com/wordpress/prod_11365/v1/wp-content/uploads/2021/05/logo-1.png" alt="Pest Busters" className="h-8" />
          <div>
            <p className="text-sm text-gray-500">Pest Control <br /> Services</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex items-center space-x-6 text-sm text-gray-600">
        <AccessTimeIcon  />
          <div>
          
            <p>Mon – Fri: 10AM – 7PM</p>
            <p>Sat – Sun: 10AM – 3PM</p>
          </div>
            <LocationOnIcon/>
          <div>
            <p>4578 Marmora Road, Glasgow</p>
          </div>
          <CallIcon color='orange' sx={{fontSize:30}}/>
          <div>
            <p>Call us: <span  className="font-bold"> (719) 445-2808</span></p>
          </div>
        </div>
      
        {/* Appointment Button */}
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-orange">
          Make an Appointment
        </button>
      </div>

      {/* Navbar */}
      <nav className="bg-orange text-white">
        <div className="container mx-auto px-4 flex justify-between items-center py-2">
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#team" className="hover:underline">Team</a></li>
            <li><a href="#blog" className="hover:underline">Blog</a></li>
            <li><a href="#contacts" className="hover:underline">Contacts</a></li>
          </ul>
          <button className=" text-orange-500 p-2 rounded-lg">
          <SearchIcon/>
          </button>
        </div>
      </nav>
    </header>
    </div>
  );
};

export default Header;
