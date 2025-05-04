import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-[90vw] sm:w-5/6 mx-auto lg:p-6 p-1 flex justify-between items-center">
        <Link href="/" className=" gilda-display-regular lg:text-4xl text-2xl hover:text-stone-600 font-bold">
          Sergio Zizzi
          </Link>
        <nav className="my-2">
          
          <Link href="/about" className="lg:text-2xl text-xl hover:text-red-500 mr-4">
            Chi sono
          </Link>
          <Link href="/contact" className="lg:text-2xl text-xl hover:text-red-500">
            Contatti
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;