import { type Variants } from 'framer-motion';

import { DEVCONFIG } from '@/app/devconfig';

export const pageContainerVariants: Variants = {
  initial: { filter: 'blur(4px)' },
  animate: { filter: 'blur(4px)' },
  finish: { filter: 'blur(0px)' },
};

const inTransition = DEVCONFIG.DEBUG_TRANSITION
  ? { ease: 'easeOut', duration: 3, delay: 0.3 }
  : { ease: 'easeOut', duration: 0.2, delay: 0.3 };

export const SheetInVariants: Variants = {
  initial: { y: '100%' },
  animate: { y: '0%', transition: inTransition },
};

const outTransition = DEVCONFIG.DEBUG_TRANSITION
  ? { ease: 'easeOut', duration: 3 }
  : { ease: 'easeOut', duration: 0.2 };
export const SheetOutVariants: Variants = {
  initial: { y: '0%' },
  animate: { y: '-100%', transition: outTransition },
};
