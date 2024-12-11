import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-8 text-center ">
        <p className="text-4xl  ">24/7 Emergency Services</p>
        <p className="text-orange text-4xl">Tel: (719) 445-2808</p>
        <div className="flex justify-center space-x-4 mt-4 ">
          <a href="#" className="text-gray-400 hover:text-orange"><InstagramIcon/></a>
          <a href="#" className="text-gray-400 hover:text-orange"><FacebookIcon/></a>
          <a href="#" className="text-gray-400 hover:text-orange"><YouTubeIcon/></a>
          <a href="#" className="text-gray-400 hover:text-orange"><XIcon/></a>
        </div>
        <p className="mt-4 text-gray-500">© 2024 All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;
  