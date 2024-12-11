const images = [
  "https://ld-wp73.template-help.com/wordpress/prod_11365/v1/wp-content/uploads/2021/05/Depositphotos_106132812_original.jpg",
  "https://ld-wp73.template-help.com/wordpress/prod_11365/v1/wp-content/uploads/2021/05/Depositphotos_76024375_original.jpg",
  "https://ld-wp73.template-help.com/wordpress/prod_11365/v1/wp-content/uploads/2021/05/Depositphotos_106136338_original.jpg",
  "https://ld-wp73.template-help.com/wordpress/prod_11365/v1/wp-content/uploads/2021/05/Depositphotos_106118914_original.jpg",
  "https://ld-wp73.template-help.com/wordpress/prod_11365/v1/wp-content/uploads/2021/05/Depositphotos_83336374_original.jpg",
  "https://ld-wp73.template-help.com/wordpress/prod_11365/v1/wp-content/uploads/2021/05/Depositphotos_106130290_original.jpg",
];

const Gallery = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative group">
            {/* Image */}
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-48 object-cover rounded shadow"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center space-y-4 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center">
              <p className="text-white">
                This house was completely maintained by our experts.
              </p>
              <button className="bg-orange text-black py-2 px-4 rounded hover:bg-[#03c78c]">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
