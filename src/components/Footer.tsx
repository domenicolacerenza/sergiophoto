import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-100 shadow">
      <div className="max-w-[90vw] sm:w-10/12 mx-auto lg:p-6 p-1 py-6 flex justify-between items-center">
        <div>
          <h2 className="lg:text-xl text-sm font-bold">© {new Date().getFullYear()} Sergio Zizzi Photography</h2>
        </div>
        <div className="text-right md:text-sm text-xs">
          <p>
            <a href="tel:+393315720878" className="underline decoration-solid hover:text-red-500">+39 331 572 0878</a>
          </p>
          <p>
            <a href="mailto:sergiozizzi.photo@gmail.com" className="underline decoration-solid hover:text-red-500">sergiozizzi.photo@gmail.com</a>
          </p>
          <p>
            <strong>P. IVA:</strong> 02705710743
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;