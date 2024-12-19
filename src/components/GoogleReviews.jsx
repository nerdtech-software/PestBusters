import { images } from "../assets/image";
const reviews = [
  {
    id: 1,
    name: "Antoinette Williams",
    daysAgo: "a month ago",
    comment:
      "I was so impressed with how quickly AT EASE was able to schedule a visit to my property! And it was very helpful that they reviewed the inspection report with me! I’ll definitely use them again!.",
    initial: "A",
    rating:"★★★★★"
  },
  {
    id: 2,
    name: "Rick Maglione",
    daysAgo: "a month ago",
    comment:
      "Thought I may have had a termite problem. At Ease understood the seriousness of the situation and responded quickly.  I knew they were a trustworthy business when I was advised it was only ants, and not those home-destroying termites.  They treated the problem and put my mind At Ease.  5 Stars.",
    initial: "R",
    rating:"★★★★★"
  },
  {
    id: 3,
    name: "Calvin Coaker",
    daysAgo: "21 days ago",
    comment:
      "At Ease pest control did a amazing job handling our insect problems in a very timely professional manner. They made the experience very easy and we highly recomend them as they did a great hov.",
    initial: "T",
  rating:"★★★★★"
  },
  {
    id: 4,
    name: "gemma borg",
    daysAgo: "21 days ago",
    comment:
      "Jeff, Zac, and the team are a pleasure to work with. They are professional and are quick to help.",
    initial: "G",
   rating:"★★★★★"
  },
  {
    id: 5,
    name: "Larry Hubbard",
    daysAgo: "1 month ago",
    comment: "Very pleased with service and ease of payment. Electronically notified of service date in advance. Highly recommend this company",
    initial: "L",
    rating:"★★★★★"
  },
  {
    id: 6,
    name: "Alicia Henson",
    daysAgo: "2 months ago",
    comment: "Great customer service! Great response time! Made sure the problem was taken care of instead of a one and done",
    initial: "A",
    rating:"★★★★★"
  },
  {
    id: 7,
    name: "Frank Dickey",
    daysAgo: "2 months ago",
    comment:
      "At Ease Pest Control is great!!! Good people to do business with . And they do a great job eliminating pests!!!!",
    initial: "F",
     rating:"★★★"
  },
  {
    id: 8,
    name: "Luke Gunter",
    daysAgo: "3 months ago",
    comment:
      "Great service and even better people!",
    initial: "L",
    rating:"★★★★★"
  },
];

const GoogleReviews = () => {
  return (
    <div className=" bg-white m-20">
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
  <a href="https://www.google.com/maps/place/At+Ease+Pest+Control/@31.0929946,-88.1489245,9z/data=!4m8!3m7!1s0xada4f8c6dee4e7ad:0x932c6e43167af9c5!8m2!3d31.0929946!4d-88.1489245!9m1!1b1!16s%2Fg%2F11wbg73hw2?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">Write A Review</a>
  </button>
</div>


     {/* Review Cards */}
<div className="px-4 sm:px-6 lg:px-10 py-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
    {reviews.map((review) => (
      <div
        key={review.id}
        className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300 p-6 text-center"
      >
        {/* Rating */}
        <div className="flex justify-center items-center mb-4">
          <span className="text-yellow-500 text-lg sm:text-xl font-bold">
            {review.rating} 
          </span>
        </div>

        {/* Comment */}
        <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-3">
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
          <h4 className="mt-2 font-semibold text-gray-800 text-sm sm:text-base">
            {review.name}
          </h4>
          <p className="text-xs sm:text-sm text-gray-500">{review.daysAgo}</p>
        </div>

        {/* Google Icon */}
        <div className="flex items-center justify-center mt-4">
          <img
            src={images.google}
            alt="Google"
            className="w-8 h-8 sm:w-10 sm:h-10 mr-2"
          />
          <span className="text-gray-600 text-xs sm:text-sm">Posted on</span>
          <a
            href="https://www.google.com/maps/place/At+Ease+Pest+Control/@31.0929946,-88.1489245,9z/data=!4m8!3m7!1s0xada4f8c6dee4e7ad:0x932c6e43167af9c5!8m2!3d31.0929946!4d-88.1489245!9m1!1b1!16s%2Fg%2F11wbg73hw2?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
            className="text-blue-500 text-xs sm:text-sm ml-1 hover:underline"
          >
            Google
          </a>
        </div>
      </div>
    ))}
  </div>

  {/* Load More Button */}
  <div className="text-center mt-6">
    <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm sm:text-base py-2 px-6 rounded transition">
      <a href="#">Load More</a>
    </button>
  </div>
</div>
</div>
  );
};

export default GoogleReviews;
