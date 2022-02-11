import React from "react";
import AboutSection from "../components/AboutSection";
import ServiceSecion from "../components/ServiceSection";
import FaqSection from "../components/FaqSection";
import { motion } from "framer-motion";
import { PageAnimation } from "../Animation";
import ScrollTop from "../components/ScrollTop";

const AboutUs = () => {
  return (
    <motion.div
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServiceSecion />
      <FaqSection />
      <ScrollTop />
    </motion.div>
  );
};

export default AboutUs;
