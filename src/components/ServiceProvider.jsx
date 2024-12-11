const ServiceProvider = () => {
  return (
    <div>
      <header className="bg-white py-8 flex items-center justify-center text-center">
        <div className="flex flex-col md:flex-row items-center md:items-start text-left md:gap-8">
          {/* Image Section */}
          <img
            src="https://ld-wp73.template-help.com/wordpress/prod_11365/v1/wp-content/uploads/2021/05/home-2.png"
            alt="Johnny Go Van"
            className="min-w-3 h-auto  mb-4 md:mb-0"
          />

          {/* Text Section */}
          <div>
            <h2 className="text-4xl mt-16 ">
              24/7 Emergency <br />
              Services
            </h2>
            <p className="text-orange-500 text-4xl text-orange">
              Tel: (719) 445-2808
            </p>
            <p className="text-gray-500 text-lg mt-2 text-right">
              If you need our help immediately we are at your service day and{" "}
              <br /> night! Just call us!
            </p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default ServiceProvider;
