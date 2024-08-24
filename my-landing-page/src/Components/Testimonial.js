import React from 'react';
import testimonialImage from '../images/TPF.png';

function Testimonial() {
  return (
    <section className="bg-gray-100 p-8">
      <div className="container mx-auto text-center">
        <img src={testimonialImage} alt="Testimonial" className="mx-auto h-20 w-20 rounded-full mb-4" />
        <blockquote className="text-xl font-semibold">"This playbook revolutionized my business. The strategies are simple yet incredibly effective."</blockquote>
        <p className="mt-4 text-gray-700">- John Doe, Entrepreneur</p>
      </div>
    </section>
  );
}

export default Testimonial;
