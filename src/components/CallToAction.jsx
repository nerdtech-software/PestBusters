const CallToAction = () => {
    return (
      <section className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center px-6">
        {/* Image */}
        <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
          <img
            src="https://ld-wp73.template-help.com/wordpress/prod_11365/v1/wp-content/uploads/2021/05/home-15.png" // Replace with actual image URL
            alt="No Pests"
            className="w-full h-full rounded-full object-cover border-4 border-orange-500"
          />
        </div>

        {/* Text */}
        <div className="mt-6 md:mt-0 md:ml-8 flex-1 text-center md:text-left">
          <p className="text-gray-600">Our experts will solve them in no time.</p>
          <h2 className="text-2xl md:text-4xl font-bold text-orange-500">
            Have Any Housing Problems?
          </h2>
        </div>

        {/* Button */}
        <div className="mt-6 md:mt-0">
          <button className="bg-orange text-white py-3 px-6 rounded font-bold hover:bg-[#03c78c] transition duration-200">
            <a href="tel:251-847-3226">MAKE AN APPOINTMENT</a>
          </button>
        </div>
      </div>
    </section>
    );
  };
  
  export default CallToAction;
  