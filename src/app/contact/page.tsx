import React from 'react';
import AOS from 'aos';

const Contact = () => {
  return (
    <div>
      <section 
        className="contact-form bg-cover bg-center bg-white p-8 mx-auto shadow-lg"
        style={{ backgroundImage: "url('/contact backgroung image.jpg')" }}
      >
        <h2 className="text-5xl text-center text-gray-800 font-semibold text-shadow-md mb-8" data-aos="zoom-out">
          Contact Us
        </h2>
        <form className="max-w-xl mx-auto">
          <input 
            type="text" 
            placeholder="Full Name" 
            required 
            className="w-full p-3 mb-4 border border-gray-300 rounded-md"
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            required 
            className="w-full p-3 mb-4 border border-gray-300 rounded-md"
          />
          <input 
            type="text" 
            placeholder="Phone Number" 
            required 
            className="w-full p-3 mb-4 border border-gray-300 rounded-md"
          />
          <textarea 
            placeholder="Your Message" 
            rows={5} 
            required 
            className="w-full p-3 mb-4 border border-gray-300 rounded-md"
          ></textarea>
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
