import { motion, Variants } from 'framer-motion';

type FadeInOutAnimationProps = {
  children: React.ReactNode;
  variants?: Variants;
};

const defaultPageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

function FadeInOut({
  children,
  variants = defaultPageVariants,
}: FadeInOutAnimationProps) {
  return (
    <motion.div
      className="h-full w-full"
      initial="initial"
      animate="in"
      exit="out"
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export default FadeInOut;
