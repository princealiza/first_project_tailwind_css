"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { HiMenuAlt3 } from 'react-icons/hi';
import { HiX } from 'react-icons/hi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-blue-500 text-white py-5 flex justify-between items-center px-10 relative z-10">
      <h1 className="text-2xl font-bold">ZB Foods</h1>

      {/* Desktop Navbar */}
      <nav className="hidden md:flex gap-10 text-white font-bold">
        <Link href="/" onClick={closeMenu}>
          Home
        </Link>
        <Link href="/about" onClick={closeMenu}>
          About
        </Link>
        <Link href="/foods" onClick={closeMenu}>
          Foods
        </Link>
        <Link href="/contact" onClick={closeMenu}>
          Contact
        </Link>
        <FaShoppingCart className="text-white text-xl" />
      </nav>

      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden flex items-center">
        <HiMenuAlt3
          className="text-white text-3xl cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } absolute top-0 left-0 w-full h-screen bg-blue-500 p-5 z-20`}
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <HiX
            className="text-white text-3xl cursor-pointer"
            onClick={closeMenu}
          />
        </div>

        {/* Mobile Links */}
        <nav className="flex flex-col items-center gap-5 mt-5 text-white font-bold">
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>
          <Link href="/about" onClick={closeMenu}>
            About
          </Link>
          <Link href="/foods" onClick={closeMenu}>
            Foods
          </Link>
          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>
          <FaShoppingCart className="text-white text-xl" />
        </nav>
      </div>
    </header>
  );
};

export default Header;