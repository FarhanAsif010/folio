import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import hotelRes from './images/hotelRes.png';
import realEstateHome from './images/realEstateHome.png';
import movieLand from './images/movieLand.png';

const projects = [
  {
    id: 1,
    title: 'Hotel Reservation System',
    image: hotelRes,
    description: 'Developed a hotel reservation system using MERN stack.',
  },
  {
    id: 2,
    title: 'Real Estate Website',
    image: realEstateHome,
    description: 'Developed a real estate website using MERN stack.',
  },
  {
    id: 3,
    title: 'Movie Finder',
    image: movieLand,
    description: 'Description for project 3',
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col items-center py-12 bg-gradient-to-r from-black to-purple-800 text-white">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link to={`/project/${project.id}`} key={project.id}>
            <motion.div
              className="bg-white text-black rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
