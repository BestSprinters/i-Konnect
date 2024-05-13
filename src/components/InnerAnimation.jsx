import { motion } from 'framer-motion';
import React from 'react';

function InnerAnimation({ children }) {
  return (
    <>
      <motion.div
        initial={{ top: '100vh', opacity: 1 }}
        animate={{ top: '100vh', opacity: 0 }}
        exit={{
          top: 0,
          opacity: 1,
          transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] },
        }}
        className="fixed left-0 top-0 z-[99999] h-full w-full bg-blackPrimary"
      />
      <motion.div
        initial={{ y: 0, scale: 1 }}
        animate={{ y: 0, scale: 1 }}
        exit={{
          y: -100,
          scale: 0.9,
          transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.8 } }}
          exit={{ opacity: 1 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </>
  );
}

export default InnerAnimation;
