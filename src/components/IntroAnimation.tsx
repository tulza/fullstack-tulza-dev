
import React from 'react';
import {
  animate,
  cubicBezier,
  motion,
  Transition,
  useMotionValue,
  useTransform,
} from 'framer-motion';

const d = 200;

export const IntroAnimation = () => {
  const [hasFinished, setHasFinished] = React.useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  React.useEffect(() => {
    const controls = animate(count, 100, {
      duration: 1.5,
      onComplete: () => {
        console.log('complete');
        setHasFinished(true);
      },
    });

    return () => controls.stop();
  }, []);

  return (
    <motion.div
      className="fixed inset-0 flex size-full items-center justify-center bg-black"
      animate={{
        opacity: hasFinished ? 0 : 1,
        filter: hasFinished ? 'blur(4px)' : 'blur(0px)',
      }}
    >
      <LoadingCircles hasFinish={hasFinished} />
      <motion.div className="absolute bottom-0 left-0 p-8 text-5xl font-bold mix-blend-difference">
        {rounded}
      </motion.div>
    </motion.div>
  );
};

const loadingTransition = (hasFinish: boolean) =>
  hasFinish
    ? ({
        duration: 3,
        ease: [0.37, 0, 0.63, 1],
      } as Transition)
    : ({
        repeat: Infinity,
        duration: 4,
        ease: [0.37, 0, 0.63, 1],
      } as Transition);

const LoadingCircles = ({ hasFinish }: { hasFinish: boolean }) => {
  return (
    <motion.div
      className="relative grid place-items-center *:size-24"
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        duration: 4.5,
        ease: cubicBezier(0.37, 0, 0.63, 1),
      }}
    >
      <motion.div
        className="absolute h-6 w-6 rounded-full bg-white mix-blend-difference"
        animate={{
          x: [d, -d, d],
          scale: hasFinish ? 100 : 1,
        }}
        transition={loadingTransition(hasFinish)}
      />
      <motion.div
        className="absolute h-6 w-6 rounded-full bg-white mix-blend-difference"
        animate={{
          x: [-d, d, -d],
          scale: hasFinish ? 100 : 1,
        }}
        transition={loadingTransition(hasFinish)}
      />
      <motion.div
        className="absolute h-6 w-6 rounded-full bg-white mix-blend-difference"
        animate={{
          y: [d, -d, d],
          scale: hasFinish ? 100 : 1,
        }}
        transition={loadingTransition(hasFinish)}
      />
      <motion.div
        className="absolute rounded-full bg-white mix-blend-difference"
        animate={{
          y: [-d, d, -d],
          scale: hasFinish ? 100 : 1,
        }}
        transition={loadingTransition(hasFinish)}
      />
    </motion.div>
  );
};
