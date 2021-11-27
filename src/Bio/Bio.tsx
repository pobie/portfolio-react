import { motion } from 'framer-motion';

function Bio() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5, duratino: 0.5 } }}
      exit={{
        opacity: 0,
        y: '-20px',
        transition: {
          ease: 'easeInOut',
        },
      }}
    >
      <div className="h-screen flex flex-col justify-center">Bio</div>
    </motion.div>
  );
}

export default Bio;
