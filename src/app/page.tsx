'use client';

import { motion } from 'framer-motion';

import { DevIcon } from '@/components/common/icon/DevIcon';

export default function PortfolioPage() {
  return (
    <div className="relative flex h-dvh w-dvw flex-col pb-0">
      <div className="flex h-dvh w-full">
        <div className="w-full p-4">
          <h1>TULZA DEV</h1>
        </div>
        <div className="border-l border-dotted p-4">
          <Navigation />
          <CircleSpin />
        </div>
      </div>
    </div>
  );
}

const Navigation = () => {
  return (
    <div
      className="grid h-24 w-80 grid-cols-3 justify-between gap-2 bg-foreground text-background"
      style={{
        clipPath:
          'polygon(20px 0, 100% 0, 100% 100%, 66% 100%, 63% 95%, 36% 95%, 33% 100%, 0 100%, 0 20px)',
      }}
    >
      <div className="flex items-end p-2">
        <DevIcon fill="black" className="size-16" />
      </div>
      <div className="flex flex-col justify-between">
        <p className="w-full text-right font-bold">MENU</p>
      </div>
      <div className="grid h-full place-items-center border-l border-dotted border-black">
        <div className="flex size-8 w-12 flex-col justify-between *:h-[1px] *:w-full *:bg-black">
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
};

const CircleSpin = () => {
  return (
    <div className="pointer-events-none absolute inset-0">
      <motion.div
        className="absolute right-0 top-1/2 size-80 rounded-full bg-white mix-blend-difference [translate:50%_-50%]"
        animate={spinanim}
        transition={spintransition}
      >
        <motion.div
          className="absolute right-0 top-1/2 size-48 rounded-full bg-white mix-blend-difference [translate:50%_-50%]"
          animate={spinanimrev}
          transition={spintransition2}
        >
          <div className="absolute right-0 top-1/2 size-24 rounded-full bg-white mix-blend-difference [translate:50%_-50%]">
            {/*  */}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const spinanim = { rotate: 360 };
const spinanimrev = { rotate: -360 };
const spintransition = { repeat: Infinity, duration: 6, ease: 'linear' };
const spintransition2 = { repeat: Infinity, duration: 2.5, ease: 'linear' };
