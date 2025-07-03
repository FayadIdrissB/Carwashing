import '../../index.css'
import {  Menu } from 'lucide-react';
import { useState } from 'react';

import logo from '../../assets/logo.png'


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header style={{ backgroundColor: '#1A4473' }} className="fixed top-0 left-0 w-full h-[90px] z-50 bg-opacity-95 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo + Texte */}
        <div className="flex items-center space-x-3">
          <img 
            src={logo} 
            alt="Nettoyage Intérieur Approfondi"
            className="w-[200px] h-[50px] object-cover mr-[200px]"
            />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 font-medium text-white">
          <a href="#" className="text-white no-underline">Accueil</a>
          <a href="#services" className="text-white no-underline"> Nos Services </a>
          <a href="#contact" className="text-white no-underline">Contact</a>
        </nav>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden p-2 rounded bg-blue-600 hover:bg-blue-700 transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}

export default Header;
