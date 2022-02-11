import React from "react";
import Home1 from "../img/home1.png";
import { titleAnim, fade, photoAnim } from "../Animation";
import Wave from "./Waves";
import {
  StyledAbout,
  StyledDescription,
  Image,
  Hide,
} from "../StyleComponents";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              Your <span>Dreams</span> Come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>True.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills to achieve it.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </StyledDescription>
      <Image className="image">
        <motion.img
          variants={photoAnim}
          src={Home1}
          alt="A guy with camera"
        ></motion.img>
      </Image>
      <Wave />
    </StyledAbout>
  );
};

export default AboutSection;
