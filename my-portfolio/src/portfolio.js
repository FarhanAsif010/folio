import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-black to-purple-800 text-white">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          className="text-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          This is a simple portfolio using React, Tailwind CSS, and Framer
          Motion.<br></br> <br></br> MERN STACK DEVELOPER | CODING ENTHUSIAST |
          PROBLEM SOLVER
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Portfolio;
