import React, {useState} from "react";
import {motion} from "framer-motion";


export const Button: React.FC<any> = ({onClick, className, children}) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(true);
    if (onClick) onClick();
    setTimeout(() => {
      setIsClicked(false);
    }, 150);
  };
  return (
    <motion.button
      onClick={handleClick}
      className={`px-3 py-2 bg-blue-800  font-medium capitalize rounded-md focus:outline-none relative ${className}`}
      initial={false}
      animate={{scaleY: isClicked ? 0.91 : 1}}
      transition={{type: "spring", stiffness: 300, damping: 20}}
    >
      {children}
      {isClicked && (
        <motion.span
          className="px-3 py-1 absolute inset-0 bg-blue-700 opacity-40 rounded-md"
          initial={{opacity: 0}}
          animate={{opacity: 0.4}}
          exit={{opacity: 0}}
          transition={{duration: 0.5}}
        ></motion.span>
      )}
    </motion.button>
  );
};
