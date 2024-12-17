const AskQuestion = () => {
  return (
    <div>
      <footer className="bg-orange text-white py-6">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Text Section */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm">Ask the Orkin Man</p>
            <h1 className="text-2xl md:text-3xl font-bold">
              You Have Questions. He Has Answers
            </h1>
          </div>

          {/* Button Section */}
          <div className="flex justify-center md:justify-end">
            <button className="bg-white text-black py-2 px-6 rounded hover:bg-[#03C78C]">
             <a href="tel:251-847-3226"> Contact Us</a>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AskQuestion;
