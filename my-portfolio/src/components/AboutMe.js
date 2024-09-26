import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';

const AboutMe = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        y: [0, -10, 0],
        opacity: 1,
        transition: {
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
        },
      });
    }
  }, [controls, inView]);

  const skillIcons = [
    { Icon: FaHtml5, alt: 'HTML5', color: '#E34F26' },
    { Icon: FaCss3Alt, alt: 'CSS3', color: '#1572B6' },
    { Icon: FaJs, alt: 'JavaScript', color: '#F7DF1E' },
    { Icon: FaReact, alt: 'React', color: '#61DAFB' },
    { Icon: FaNodeJs, alt: 'Node.js', color: '#339933' },
    { Icon: SiExpress, alt: 'Express', color: '#000000' },
    { Icon: SiMongodb, alt: 'MongoDB', color: '#47A248' },
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-black to-purple-800 text-white py-24">
      <motion.section
        ref={ref}
        className="about"
        initial={{ opacity: 1, y: 50 }}
        animate={controls}
      >
        <div className="text-center max-w-2xl p-8 rounded-lg bg-gradient-to-r from-purple-850/80 to-purple-900/80 shadow-[0_0_15px_rgba(255,255,255,0.1)] backdrop-blur-md relative overflow-hidden">
          {/* Glowing left border */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500 shadow-[0_0_15px_5px_rgba(168,85,247,0.5)]"></div>

          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg mb-8">
            Hello! I'm Farhan, a passionate developer with experience in
            building web applications using modern technologies. I love creating
            beautiful and functional user interfaces and am always eager to
            learn new things and take on new challenges.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {skillIcons.map(({ Icon, alt, color }, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Icon
                  title={alt}
                  className="w-16 h-16"
                  style={{ color: color }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutMe;
