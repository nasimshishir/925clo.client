import React, { ReactNode, useEffect, useState } from 'react';

interface SlideDownProps {
  isOpen: boolean;
  children: ReactNode
}

const SlideDown: React.FC<SlideDownProps> = ({ children, isOpen }) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  const onAnimationEnd = () => {
    if (!isOpen) {
      setIsVisible(false);
    }
  };

  return (
    <div
      className={`${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        } fixed top-0 left-0 w-full h-full transition-transform duration-300 ease-in-out`}
      onAnimationEnd={onAnimationEnd}
    >
      {children}
    </div>
  );
};

export default SlideDown;
