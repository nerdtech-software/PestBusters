const ServiceProvider = () => {
  return (
    <div>
      <header className="bg-white py-8">
        <div className="container mx-auto px-4 flex flex-wrap items-center text-center md:text-left">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-4 md:mb-0">
            <img
              src="https://ld-wp73.template-help.com/wordpress/prod_11365/v1/wp-content/uploads/2021/05/home-2.png"
              alt="Johnny Go Van"
              className="w-full max-w-md h-auto"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-4xl font-bold mt-4 md:mt-0">
              24/7 Emergency <br /> Services
            </h2>
            <p className="text-orange-500 text-xl md:text-2xl mt-4">
              Tel: (719) 445-2808
            </p>
            <p className="text-gray-500 text-sm md:text-lg mt-2">
              If you need our help immediately, we are at your service day and <br /> night! Just call us!
            </p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default ServiceProvider;
