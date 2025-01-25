import React from 'react';
import { motion } from 'motion/react';

import useMousePosition from './useMousePosition';
import { IMAGE_TOP_URL, IMAGE_BEHIND_URL } from './constants';

export default function App() {
  return (
    <main className='main'>
      <BehindImage />
      <Mask />
    </main>
  );
}

/** Components */
function BehindImage() {
  return (
    <div className='wrapper'>
      <img src={IMAGE_BEHIND_URL} alt='window' className='img' />
    </div>
  );
}

function MaskImage({ ...rest }: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img {...rest} src={IMAGE_TOP_URL} alt='tall building' className='img' />
  );
}

function Mask() {
  const [isHovered, setIsHovered] = React.useState(false);
  const pos = useMousePosition();

  // Update mask size
  const size = isHovered ? 300 : 40;

  return (
    <motion.div
      className='wrapper mask'
      animate={{
        WebkitMaskPosition: `${pos.x - size / 2}px ${pos.y - size / 2}px`,
        WebkitMaskSize: `${size}px`,
      }}
      transition={{
        type: 'tween',
        ease: 'backOut',
        duration: 0.4,
      }}
    >
      <MaskImage
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </motion.div>
  );
}
