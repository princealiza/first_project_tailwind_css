import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  return (
    <div>
      <section
        className="about bg-cover bg-center text-white h-screen flex justify-start items-center px-5 py-20"
        style={{ backgroundImage: "url('/about image.jpg')" }}
      >
        <div className="about-content max-w-lg text-center bg-black/60 rounded-lg p-5">
          <h2 className="text-5xl font-bold text-shadow-md mb-5" data-aos="fade-right">About Us</h2>
          <p className="text-lg mt-3">
            Welcome to ZB Foods, where quality meets taste! We are passionate about delivering fresh, delicious, and wholesome food products to make every meal special.
          </p>
          <p className="text-lg mt-3">
            At ZB Foods, we believe food brings people together, and our commitment is to provide flavors that inspire. Join us on this journey and let us be a part of your table!
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;