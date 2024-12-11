const AskQuestion = () => {
  return (
    <div>
      <footer className="bg-orange text-white py-6">
        <div className="flex items-center justify-between px-80 md:px-80">
          {/* Text Section */}
          <div>
            <p className="text-sm">Ask the Orkin Man</p>
            <h1 className="text-3xl font-bold">You Have Questions. He Has Answers</h1>
          </div>
          {/* Button Section */}
          <button className="bg-white text-orange-500 py-2 px-6 rounded text-black hover:bg-[#03C78C]">
            Contact Us
          </button>
        </div>
      </footer>
    </div>
  );
};

export default AskQuestion;
