import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import React from 'react';
const Contact = () => {
  return (
    <div>
 
    <div className=" bg-gray-100 flex items-center justify-center py-10 ">
      <div className="max-w-7xl w-full p-10 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-lg">
        {/* Contact Info Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p className="text-gray-600">
        <AddLocationAltIcon className='text-blue-400'/>   <strong>4707 Four Points Rd. 
Deer Park, AL 36529
</strong>
          </p>
          <p className="text-gray-600">
            📞 <strong>251-847-3226</strong>
          </p>
          <p className="text-gray-600">
            ✉️ <strong> office.aepc@gmail</strong>
          </p>
          {/* Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9683167751436!2d-74.00601508459484!3d40.71277607933069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDAlNDInNDYuMCJOIDc0wrAwMCc0OC4wIlc!5e0!3m2!1sen!2sus!4v1632350330097!5m2!1sen!2sus"
            width="100%"
            height="250"
            allowFullScreen=""
            loading="lazy"
            className="rounded-md shadow"
          ></iframe>
        </div>

        {/* Message Form Section */}
        <div>
          <h2 className="text-xl font-semibold">Write your Message</h2>
          <form className="space-y-6 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full name"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <textarea
              rows="5"
              placeholder="Your message goes here..."
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            <button
              type="submit"
              className="bg-orange text-white py-2 px-6  hover:bg-green-600"
            >
              Send Me
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
    
   
  )
}

export default Contact