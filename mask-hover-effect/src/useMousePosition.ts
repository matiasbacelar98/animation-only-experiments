import React from 'react';

type Positions = {
  x: number;
  y: number;
};

export default function useMousePosition(): Positions {
  const [position, setPosition] = React.useState<Positions>({
    x: 0,
    y: 0,
  });

  // Take pos from mouse
  React.useEffect(() => {
    function updateMousePosition(e: MouseEvent) {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    }

    window.addEventListener('mousemove', updateMousePosition);

    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return position;
}
