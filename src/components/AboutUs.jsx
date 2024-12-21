import DoneIcon from '@mui/icons-material/Done';

const AboutUs = () => {
  const points = ["We Investigate", "We Protect", "We Fortify", "We Keep Watch", " You Stay Happy"];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-wrap lg:flex-nowrap items-center lg:items-start">
        {/* Left Side: Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">About Us</h2>
          <p className="text-gray-600 mb-8">
          We are a company providing a wide range of pest control services to keep your home safe and you and your family comfortable.
          </p>
          <ul className="grid grid-cols-1 gap-4">
            {points.map((point, index) => (
              <li key={index} className="flex items-center space-x-3 text-lg text-gray-700">
                <span className="text-orange font-bold text-xl"><DoneIcon /></span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="https://ld-wp73.template-help.com/wordpress/prod_11365/v1/wp-content/uploads/2021/05/home-14.jpg" 
            alt="Pest Control Services"
            className="w-full h-auto max-w-md lg:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;