import React from 'react';
import productImage from '../images/Ebook.png';

function ProductInfo() {
  return (
    <section className="p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={productImage} alt="Digital Marketing Playbook" className="mx-auto" style={{ maxWidth: '400px', maxHeight: '500px' }} />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">What Will This Playbook Teach You?</h3>
          <p className="mb-4">Dive into cutting-edge digital marketing techniques that are designed to help you dominate your niche. From SEO to Social Media, this guide covers it all.</p>
          <button className="bg-red-500 text-white px-6 py-3 rounded-full">Order Your Playbook Today</button>
        </div>
      </div>
    </section>
  );
}

export default ProductInfo;
