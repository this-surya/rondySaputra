import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const ScrollAnimation = ({ children, className = "", direction }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  let move = 50;

     
  if(direction == "left") {
    move = -50;
  }

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: move }}
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${className}`}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
