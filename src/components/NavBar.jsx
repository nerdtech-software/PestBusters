import { images } from '../assets/image';

const NavBar = () => {
  return (
    <section className="relative bg-gray-200 min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <img
        src={images.BgImage}
        alt="Background"
        className="absolute inset-0 object-cover h-full w-full"
      />

      {/* Content Container */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="text-center md:text-left md:w-1/2 z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Complex Approach{" "}
            <span className="text-orange-500">to Pest Control</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-100 mb-6">
            We are here to resolve the most complex issue!
          </p>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
