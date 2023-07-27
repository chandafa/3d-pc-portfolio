import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, socials } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div className="w-full flex justify-left items-center max-w-7xl mx-auto mb-9 mt-9">
        {socials.map((item, index) => (
          <motion.a
            key={index}
            href={item.url}
            target="_blank"
            className="mr-5"
          >
            <motion.img className="w-8 h-8" src={item.icon} />
          </motion.a>
        ))}
      </motion.div>

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a passionate cybersecurity student specializing in offensive
        security techniques and proactive vulnerability identification. My
        mission is to strengthen defenses by finding vulnerabilities before they
        can be exploited.<br></br>
        <br></br>Throughout my journey, I have been actively pursuing a BSc in
        Cybersecurity, expanding my knowledge and staying updated on the latest
        IT trends.<br></br>
        <br></br> My areas of interest include offensive cybersecurity, software
        development, and the intersection of security with DevOps practices.
        <br></br>
        <br></br>I invite you to explore and learn more about my work and how I
        can contribute to your organization's security posture.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
