import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaFileAlt } from 'react-icons/fa';

const Contact = () => {
  const contactItems = [
    {
      icon: <FaEnvelope />,
      text: 'khawajafarhan010@gmail.com',
      link: 'mailto:your.email@example.com',
    },
    {
      icon: <FaLinkedin />,
      text: 'LinkedIn',
      link: 'https://www.linkedin.com/in/asif-farhan',
    },
    {
      icon: <FaFileAlt />,
      text: 'Resume',
      link: 'https://resume-farhan.tiiny.site',
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-black to-purple-800 text-white py-24">
      <section className="contact transition duration-300 ease-in-out hover:scale-105">
        <motion.div
          className="text-center max-w-2xl p-8 rounded-lg bg-gradient-to-r from-black to-purple-800"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
          <div className="space-y-6">
            {contactItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-4 text-xl hover:text-purple-300 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-2xl">{item.icon}</span>
                <span>{item.text}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
