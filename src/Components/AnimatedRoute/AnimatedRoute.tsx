import React from "react";
import { AnimationProps, motion } from "framer-motion";

interface AnimationProp {
  children?:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactNodeArray
    | React.ReactPortal;
}

const AnimatedRoute = ({ children }: AnimationProp) => {
  const animate: AnimationProps["variants"] = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0, transition: { duration: 2 } },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <motion.div
      variants={animate}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 2 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedRoute;
