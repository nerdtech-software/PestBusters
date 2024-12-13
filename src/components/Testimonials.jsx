import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Meg Richards",
    role: "Accountant",
    review:
      "I was recommended to use Pest Busters and was impressed by their professionalism and effectiveness.",
    image: "https://via.placeholder.com/48"
  },
  {
    name: "Adam Smith",
    role: "Teacher",
    review:
      "Thanks to Pest Busters, my home is now pest-free! They helped me resolve the issue quickly and professionally.",
    image: "https://via.placeholder.com/48"
  },
  {
    name: "David Jones",
    role: "Manager",
    review:
      "It was my first time requesting pest control, and their service exceeded my expectations. Highly recommend!",
    image: "https://via.placeholder.com/48"
  },
  {
    name: "Linda Brown",
    role: "Designer",
    review:
      "Pest Busters truly lives up to its name. Quick, efficient, and friendly service!",
    image: "https://via.placeholder.com/48"
  },
  {
    name: "Chris Evans",
    role: "Developer",
    review:
      "Amazing service! The team was very professional, and the results were outstanding.",
    image: "https://via.placeholder.com/48"
  },
  {
    name: "Jessica Taylor",
    role: "Chef",
    review:
      "A seamless experience from start to finish. I would gladly recommend them to others!",
    image: "https://via.placeholder.com/48"
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + 3
  );

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">What People Think About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded shadow-lg text-left"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full mr-4"
                />
                <p className="text-orange-500 font-bold">{testimonial.name}</p>
              </div>
              <p className="text-gray-600 italic">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
