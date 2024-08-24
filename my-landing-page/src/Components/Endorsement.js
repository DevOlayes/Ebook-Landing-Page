import React from 'react';
import logo1 from '../images/BRAND_LOGO_1.png';
import logo2 from '../images/BRAND_LOGO_2.png';
import logo3 from '../images/BRAND_LOGO_2.png';

function Endorsement() {
  return (
    <section className="bg-white p-8">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">Endorsed by Industry Leaders</h3>
        <p className="mb-4">Top digital marketing experts recommend this playbook as a must-have resource for anyone serious about online success.</p>
        <div className="flex justify-center gap-8">
          <img src={logo1} alt="Brand Logo 1" className="h-20 w-20" />
          <img src={logo2} alt="Brand Logo 2" className="h-20 w-20" />
          <img src={logo3} alt="Brand Logo 3" className="h-20 w-20" />
        </div>
        <button className="bg-red-500 text-white px-6 py-3 rounded-full mt-4">Claim Your Copy Now</button>
      </div>
    </section>
  );
}

export default Endorsement;
