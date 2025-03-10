'use client'

import Image from "next/image";
import Nav from "./component/nav";
import Jumbotron from "./component/jumbotron";
import Footer from "./component/footer";
import About from "./component/about";
import Experiences from "./component/experience";
import Service from "./component/sercive";
import Project from "./component/project";
import Achievement from "./component/achievement";
import Sertificatet from "./component/sertificate";
import Sertificate from "./component/sertificate";
import Contact from "./component/contact";
import EnterAnimation from "./component/frammer";

import { motion } from "framer-motion";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import ScrollAnimation from "./component/frammer";



const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return <div>{children}</div>;
};


export default function Home() {
  return (
    <SmoothScroll>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >

      <Nav />
      <Jumbotron />
      {/* <Service/> */}

      <ScrollAnimation direction="left">
      <About/>
      </ScrollAnimation>

      <ScrollAnimation direction="right">
      <Experiences/>
      </ScrollAnimation>

      <ScrollAnimation direction="left">
      <Project/>
      </ScrollAnimation>

      <ScrollAnimation direction="right">
      <Achievement/>
      </ScrollAnimation>

      <ScrollAnimation direction="left">
      <Sertificate/>
      </ScrollAnimation>

      <ScrollAnimation direction="right">
      <Contact/>
      </ScrollAnimation>

      <Footer />

      </motion.div>
      </SmoothScroll>

  );
}
