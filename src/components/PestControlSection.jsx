import React from "react";

const PestControlSection = () => {
  const Data = [
    {
      img: "https://live.staticflickr.com/65535/32742922837_a44ef90e3e_b.jpg",
      title: "Eliminate Unwanted Pests",
      details:
        "It doesn't matter what type you have, we have solutions. Roaches, termites, ants, bats, even spider issues. We can help! Just call.",
      icon: "🐜",
    },
    {
      img: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/05/featured-image-termite-treatment.jpeg-1.jpg",
      title: "Extermination and Treatment",
      details:
        "Once we have any infestations taken care we move to a once a quarter treatment. we can spray just the outside of your home and guarantee that you will have a bug-free home. ",
      icon: "💧",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe9RjFCOIlrTr1oOg-p_8rvBMvGZS1JZ81XA&s",
      title: "Commercial Pest",
      details:
        "Dealing with high traffic, restaurants, or large warehouses, every situation is different. Call or message us today for a free quote.",
      icon: "🏢",
    },
    {
      img: "https://www.revechat.com/wp-content/uploads/2022/02/Great-Customer-Support-jpg.webp",
      title: "Customer Service",
      details:
        "Maybe we are old school, but call us and speak to an owner. Whatever happened to the customer is always right attitude?",
      icon: "📞",
    },
  ];

  return (
    <div className="py-12 bg-white">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-sm text-green-600 font-semibold uppercase">
          WHAT WE OFFER
        </h2>
        <h1 className="text-3xl font-bold text-gray-800 mt-2">
          Eliminate Unwanted Pests
        </h1>
        <p className="text-gray-600 mt-4">
          It doesn’t matter what type you have, we have solutions. Roaches,
          termites, ants, bats, even spider issues. We can help! Just call{" "}
          <span className="font-semibold">251-847-2077</span>
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 px-4">
        {Data.map((item, index) => (
          <div
            key={index}
            className="max-w-sm w-full bg-gray-50 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col"
          >
            {/* Image */}
            <div>
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex-grow">
              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2 line-clamp-3">
                {item.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PestControlSection;
