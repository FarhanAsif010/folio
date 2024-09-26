import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import hotelRes from './images/hotelRes.png';
import hotelFooter from './images/hotelFooter.png';
import realEstateHome from './images/realEstateHome.png';
import realEstateProfile from './images/realEstateProfile.png';
import movieLand from './images/movieLand.png';
import movieBat from './images/movieBat.png';
import chal from './images/chal.png';
const projects = [
  {
    id: 1,
    title: 'Hotel Reservation System',
    image: hotelRes,
    description: 'Developed a hotel reservation system using MERN stack.',
    detailImages: [hotelRes, hotelFooter, 'https://via.placeholder.com/300'],
  },
  {
    id: 2,
    title: 'Project 2',
    image: realEstateHome,
    description:
      'Real Estate Website with Made with MERN Stack with live chat, location, filters, Login, Register authentication Update Profile feature and many more You can also add your own property for sale or rent',
    detailImages: [realEstateProfile, realEstateHome],
  },
  {
    id: 3,
    title: 'Project 3',
    image: movieLand,
    description: 'Description for project 3',
    detailImages: [movieLand, movieBat, chal],
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="flex flex-col items-center py-12 bg-gradient-to-r from-black to-purple-800 text-white min-h-screen pt-24">
      <h1 className="text-4xl font-bold mb-8">{project.title}</h1>
      <p className="mb-8 max-w-2xl text-center">{project.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {project.detailImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              src={image}
              alt={`${project.title} - Detail ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetail;
