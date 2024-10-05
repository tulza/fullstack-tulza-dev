'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

import { DEVCONFIG } from '@/app/devconfig';
import { cn } from '@/lib/utils';
import {
  pageContainerVariants,
  SheetInVariants,
  SheetOutVariants,
} from './transitionVariants';

type TransitionProps = {
  children: React.ReactNode;
};

type TransitionContext = {
  handleRouteChange: (path?: string) => void;
};

const TransitionContext = React.createContext({} as TransitionContext);

export const useTransition = () => {
  const context = React.useContext(TransitionContext);
  if (!context) {
    throw new Error('useTransition must be used within a TransitionProvider');
  }
  return context;
};

let hasFirstRender = DEVCONFIG.ENABLE_FIRST_LOAD_TRANSITION;

const Transition = ({ children }: TransitionProps) => {
  const router = useRouter();
  const handleRouteChange = (path = '/') => {
    router.push(path);
    if (isTransitioning) {
      return;
    }
    setTransitioning(true);
    setPath(path);
  };

  const handleTransitionRoute = () => {
    setTransitioning(false);
    router.push(path);
  };

  useEffect(() => {
    hasFirstRender = false;
  }, []);

  const [isTransitioning, setTransitioning] = useState(false);
  const [path, setPath] = useState('/');

  return (
    <TransitionContext.Provider value={{ handleRouteChange }}>
      <motion.div
        className={cn(
          'origin-bottom w-dvw overflow-hidden relative',
          isTransitioning && 'overflow-hidden h-dvh relative'
        )}
        initial="initial"
        animate={isTransitioning ? 'animate' : 'finish'}
        variants={pageContainerVariants}
      >
        {children}
      </motion.div>
      {/* transition */}
      <div className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none">
        {isTransitioning && (
          <motion.div
            className="absolute inset-0 size-full bg-slate-800"
            initial="initial"
            animate="animate"
            variants={SheetInVariants}
            onAnimationComplete={handleTransitionRoute}
          />
        )}
        {!isTransitioning && hasFirstRender && (
          <motion.div
            className="fixed inset-0 size-full bg-slate-800"
            initial="initial"
            animate="animate"
            variants={SheetOutVariants}
          />
        )}
      </div>
    </TransitionContext.Provider>
  );
};

export default Transition;
