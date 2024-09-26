import React from 'react';
import { motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import './Header.css';

const Header = ({ scrollToSection }) => {
  const location = useLocation();
  const isProjectDetail = location.pathname.startsWith('/project/');

  return (
    <header className="fixed top-0 left-0 right-0 flex justify-between items-center p-6 bg-gradient-to-r from-black to-purple-800 text-white z-50">
      <motion.div
        className="text-2xl font-bold"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Farhan
      </motion.div>
      <nav className="relative">
        {isProjectDetail ? (
          <Link to="/" className="hover:text-purple-300">
            Home
          </Link>
        ) : (
          <ul className="flex space-x-4">
            {['Home', 'About Me', 'Projects', 'Contact'].map((item, index) => (
              <li key={index} className="relative group">
                <button
                  className="hover:text-purple-300"
                  onClick={() => scrollToSection(item)}
                >
                  {item}
                </button>
                <span className="underline"></span>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
