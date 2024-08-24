import React from 'react';
import heroImage from '../images/Banner.png'; // Update the path to be relative to the Components folder

function HeroSection() {
  return (
    <section 
      className="bg-gray-900 text-white p-8 bg-cover bg-center" 
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Unlock the Secrets to Explosive Growth with Our Digital Marketing Playbook!
        </h2>
        <p className="text-lg mb-8">
          Learn proven strategies from top industry experts to skyrocket your online presence.
        </p>
        <button className="bg-red-500 text-white px-6 py-3 rounded-full">
          Get Your Copy Now for $29.95
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
