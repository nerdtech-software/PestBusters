import { images } from "../assets/image";
const reviews = [
  {
    id: 1,
    name: "Jeff Haydn",
    daysAgo: "7 days ago",
    comment:
      "The Website Guy Team have been great to deal with. Professional, knowledgeable and extremely helpful.",
    initial: "J",
    rating:"★★★★"
  },
  {
    id: 2,
    name: "Brian Rohan",
    daysAgo: "21 days ago",
    comment:
      "Zac and Jeff are doing an exceptional job of managing our online presence. The team have been fantastic.",
    initial: "B",
    rating:"★★★★"
  },
  {
    id: 3,
    name: "TANIA RODGER",
    daysAgo: "21 days ago",
    comment:
      "Look no further if you're looking for guys that know what is current and fresh. My website is AMAZING even better than I imagined.",
    initial: "T",
    rating:"★★★★"
  },
  {
    id: 4,
    name: "gemma borg",
    daysAgo: "21 days ago",
    comment:
      "Jeff, Zac, and the team are a pleasure to work with. They are professional and are quick to help.",
    initial: "G",
    rating:"★★★★"
  },
  {
    id: 5,
    name: "Kris Morris",
    daysAgo: "1 month ago",
    comment: "Very knowledgeable & also very prompt service! Highly recommend Zac.",
    initial: "K",
     rating:"★★★★"
  },
  {
    id: 6,
    name: "Rebecca Leggett",
    daysAgo: "2 months ago",
    comment: "Zac is great to communicate with, he is quick to reply and gets the job done!",
    initial: "R",
     rating:"★★★★"
  },
  {
    id: 7,
    name: "Lakes Tiles",
    daysAgo: "2 months ago",
    comment:
      "We love our new website and are currently having another one created by Jeff and the team.",
    initial: "L",
     rating:"★★★"
  },
  {
    id: 8,
    name: "Sean Dickson",
    daysAgo: "3 months ago",
    comment:
      "The Website Guy, through the efforts of Jeff, Zac, and Gemma, worked tirelessly in the setup of our site.",
    initial: "S",
     rating:"★★★★"
  },
];

const GoogleReviews = () => {
  return (
    <div className="py-10 bg-white m-20">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Google Reviews</h2>
        <p className="text-gray-600 mt-2">
          What our happy clients say about us
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center sm:justify-between bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md space-y-4 sm:space-y-0">
  {/* Left Section */}
  <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
    {/* Google Logo */}
    <h3 className="text-gray-800 text-2xl sm:text-4xl font-medium text-center sm:text-left">
      <span className="text-blue-500 font-bold">G</span>
      <span className="text-red-500 font-bold">o</span>
      <span className="text-yellow-500 font-bold">o</span>
      <span className="text-blue-500 font-bold">g</span>
      <span className="text-green-500 font-bold">l</span>
      <span className="text-red-500 font-bold">e</span>
      <span className="ml-2 text-gray-700 font-semibold">Rating</span>
    </h3>

    {/* Rating */}
    <div className="flex flex-col sm:flex-row items-center sm:space-x-2">
      <span className="text-3xl sm:text-4xl font-bold text-gray-800">5.0</span>
      <div className="flex space-x-1">
        {/* 5 Star Icons */}
        {[...Array(5)].map((_, index) => (
          <span key={index} className="text-yellow-500 text-lg sm:text-xl">
            ★
          </span>
        ))}
      </div>
      <span className="text-gray-600 text-sm sm:text-base">202 reviews</span>
    </div>
  </div>

  {/* Right Section */}
  <button className="bg-orange hover:bg-green-400 text-white text-sm sm:text-base font-medium py-2 px-4 rounded transition duration-200">
    Write A Review
  </button>
</div>


      {/* Review Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 py-10">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300 p-6 text-center"
          >
          
           
            
                <span className="text-yellow-500 text-xl">
                {review.rating}
              </span>
            
           

            {/* Comment */}
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {review.comment}
            </p>
            <p className="text-blue-600 font-medium cursor-pointer hover:underline">
              Read more
            </p>

            {/* User Info */}
            <div className="flex flex-col items-center mt-4">
              <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-lg font-bold">
                {review.initial}
              </div>
              <h4 className="mt-2 font-semibold text-gray-800">{review.name}</h4>
              <p className="text-sm text-gray-500">{review.daysAgo}</p>
            </div>

            {/* Google Icon */}
            <div className="flex items-center justify-center mt-4">
              <img
                 src={images.google}
                alt="Google"
                className="w-10 h-10 mr-2  "
              />
              <span className="text-gray-600 text-sm">Posted on</span>
              <a
                href="#"
                className="text-blue-500 text-sm ml-1 hover:underline"
              >
                Google
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
          <button
            
            className="bg-orange hover:bg-aqua-700 text-white py-2 px-4 rounded transition"
          >
          <a href="">  Load More</a>
          </button>
        </div>
    </div>
  );
};

export default GoogleReviews;
