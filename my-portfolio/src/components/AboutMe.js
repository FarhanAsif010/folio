import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutMe = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        y: [0, 20, 0],
        opacity: 1,
        transition: { duration: 1 },
      });
    }
  }, [controls, inView]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-black to-purple-800 text-white py-24">
      <section className="about transition duration-300 ease-in-out hover:scale-105">
        {/* Your existing About me content */}
        <motion.div
          ref={ref}
          className="text-center max-w-2xl p-8 rounded-lg bg-gradient-to-r from-black to-purple-800"
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
        >
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg">
            Hello! I'm Farhan, a passionate developer with experience in
            building web applications using modern technologies. I love creating
            beautiful and functional user interfaces and am always eager to
            learn new things and take on new challenges.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutMe;
