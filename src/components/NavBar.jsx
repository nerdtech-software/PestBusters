const NavBar = () => {
  return (
    <section className="relative bg-gray-200 min-h-screen flex items-center justify-center ">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://ld-wp73.template-help.com/wordpress/prod_11365/v1/wp-content/uploads/2021/05/home-1.jpg')",
        }}
      ></div>
      <div className="relative container mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 text-black z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 ">
            Complex Approach{" "}
            <span className="text-orange">to Pest Control</span>
          </h1>
          <p className="text-lg text-black mb-6">
            We are here to resolve the most complex issue!
          </p>
          <a href="#contacts" className="inline-block bg-orange  hover:bg-green-500 text-white px-6 py-3 rounded-lg transition cursor-pointer">
            Need Emergency Services?
          </a>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
