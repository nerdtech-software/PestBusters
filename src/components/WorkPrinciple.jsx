const steps = [
    {
      title: "Preparatory arrangements",
      description: "We inspect and prepare the site...",
      icon: "https://ld-wp73.template-help.com/wordpress/prod_11365/v1/wp-content/uploads/2021/05/home-11.png",
    },
    {
      title: "Disinfection",
      description: "We use eco-friendly disinfectants...",
      icon: "https://ld-wp73.template-help.com/wordpress/prod_11365/v1/wp-content/uploads/2021/05/home-12.png",
    },
    {
      title: "Removal after disinfection",
      description: "We ensure a clean, safe space...",
      icon: "https://ld-wp73.template-help.com/wordpress/prod_11365/v1/wp-content/uploads/2021/05/home-13.png",
    },
  ];
  
  const  WorkPrinciple = () => {
    return (
      <section className=" py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Work Principle</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className=" p-6   max-w-xs text-center"
            >
              <img
                src={step.icon}
                alt={step.title}
                className="w-96 h-auto mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default WorkPrinciple;
  