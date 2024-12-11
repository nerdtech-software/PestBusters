const testimonials = [
    {
      name: "Meg Richards",
      role: "Accountant",
      review: "I was recommended to use Pest Busters and was impressed by their professionalism and effectiveness.",
    },
    {
      name: "Adam Smith",
      role: "Teacher",
      review: "Thanks to Pest Busters, my home is now pest-free! They helped me resolve the issue quickly and professionally.",
    },
    {
      name: "David Jones",
      role: "Manager",
      review: "It was my first time requesting pest control, and their service exceeded my expectations. Highly recommend!",
    },
  ];
  
  const Testimonials = () => {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">What People Think About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded shadow-lg text-left"
              >
                <p className="text-orange-500 font-bold mb-2">{testimonial.name}</p>
                <p className="text-gray-600 italic">{testimonial.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  