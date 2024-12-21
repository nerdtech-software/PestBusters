
const services = [
    { name: "Cockroaches", icon: "https://ld-wp73.template-help.com/wordpress/prod_11365/v1/wp-content/uploads/2021/05/home-3.png" },
    { name: "Termites", icon: "https://ld-wp73.template-help.com/wordpress/prod_11365/v1/wp-content/uploads/2021/05/home-4.png" },
    { name: "Ants", icon: "https://ld-wp73.template-help.com/wordpress/prod_11365/v1/wp-content/uploads/2021/05/home-5.png" },
    { name: "Flies", icon: "https://ld-wp73.template-help.com/wordpress/prod_11365/v1/wp-content/uploads/2021/05/home-6.png" },
    
    { name: "Spiders", icon: "https://ld-wp73.template-help.com/wordpress/prod_11365/v1/wp-content/uploads/2021/05/home-8.png" },
    { name: "Rodents", icon: "https://ld-wp73.template-help.com/wordpress/prod_11365/v1/wp-content/uploads/2021/05/home-9.png" },
    
  ];
const ServiceTypes = () => {
    
  return (
   
      
          <section className="bg-gray-50 py-16">
            <h2 className="text-3xl font-bold text-center mb-8">How Can We Protect Your Home?</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="text-center flex flex-col items-center space-y-2"
                >
                  <img src={service.icon} alt={service.name} className="w-96 h-auto transition-transform duration-700 transform hover:scale-75" />
                  <p className="text-lg font-semibold">{service.name}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
            
            </div>
          </section>
       
  )
}

export default ServiceTypes