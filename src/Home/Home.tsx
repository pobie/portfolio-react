import { motion } from 'framer-motion';
import CyclingText from './CyclingText';

function Home() {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: '20px' }}
      animate={{
        opacity: 1,
        y: '0',
        transition: { delay: 0.5, duration: 0.5 },
      }}
      exit={{
        opacity: 0,
        y: '-20px',
        transition: {
          ease: 'easeInOut',
        },
      }}
    >
      <div className="h-screen w-full flex flex-col justify-center">
        <div className="flex flex-col">
          <h1 className="font-extrabold">Pierre-Olivier Boulet</h1>
          <h2 className="text-blue-500">
            <div className="flex">
              <p className="mr-2">I do</p>
              <CyclingText />
            </div>
          </h2>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
