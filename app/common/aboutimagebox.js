'use client';
// components/AnimatedBox.js
import { motion } from 'framer-motion';
import Image from 'next/image';
import useOnScreen from '../hook/useOnScreen';
import { useRef } from 'react';

const boxVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

export const AboutImageBox = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref, { threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      className="w-32 h-32"
      variants={boxVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      exit={{ opacity: 0, y: 50 }} // Exit state
      transition={{ duration: 2 }} // Transition settings
    >
      <Image src="/dotted.png" height={120} width={80} />
    </motion.div>
  );
};

const boxVariantsFam = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export const AboutFamilyBox = ({ imgsrc }) => {
  const ref = useRef();
  const isVisible = useOnScreen(ref, { threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      variants={boxVariantsFam}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      exit={{ opacity: 0, y: 50 }} // Exit state
      transition={{ duration: 1 }} // Transition settings
    >
      <Image
        src={imgsrc ?? `/familyimage.png`}
        height={250}
        width={580}
        alt="About image"
      />
    </motion.div>
  );
};
