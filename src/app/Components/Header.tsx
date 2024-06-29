import Link from 'next/link';
import { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-0">
        <div className="text-2xl font-bold">
          <Link href="#">
            <span className="text-gray-900 hover:text-gray-700">Martabak Indomie</span>
          </Link>
        </div>
        {/* Hamburger menu for mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        {/* Sidebar menu for mobile */}
        <nav className={`lg:hidden absolute top-0 left-0 w-64 bg-white shadow-md transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-40`}>
          <ul className="pt-4">
            <li>
              <Link href="#">
                <span onClick={toggleMenu} className="block py-2 px-6 text-gray-700 hover:text-gray-900">Beranda</span>
              </Link>
            </li>
            <li>
              <Link href="#menu">
                <span onClick={toggleMenu} className="block py-2 px-6 text-gray-700 hover:text-gray-900">Menu</span>
              </Link>
            </li>
            <li>
              <Link href="#about">
                <span onClick={toggleMenu} className="block py-2 px-6 text-gray-700 hover:text-gray-900">Tentang Kami</span>
              </Link>
            </li>
            <li>
              <Link href="#testimonials">
                <span onClick={toggleMenu} className="block py-2 px-6 text-gray-700 hover:text-gray-900">Testimoni</span>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <span onClick={toggleMenu} className="block py-2 px-6 text-gray-700 hover:text-gray-900">Kontak</span>
              </Link>
            </li>
          </ul>
        </nav>
        {/* Desktop navigation */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-4">
            <li>
              <Link href="#">
                <span className="text-gray-700 hover:text-gray-900">Beranda</span>
              </Link>
            </li>
            <li>
              <Link href="#menu">
                <span className="text-gray-700 hover:text-gray-900">Menu</span>
              </Link>
            </li>
            <li>
              <Link href="#about">
                <span className="text-gray-700 hover:text-gray-900">Tentang Kami</span>
              </Link>
            </li>
            <li>
              <Link href="#testimonials">
                <span className="text-gray-700 hover:text-gray-900">Testimoni</span>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <span className="text-gray-700 hover:text-gray-900">Kontak</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
