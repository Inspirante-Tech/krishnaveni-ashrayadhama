import React from 'react';

interface MenuSvgProps {
  openNavigation: boolean;
}

const MenuSvg: React.FC<MenuSvgProps> = ({ openNavigation }) => {
  return (
    <svg
      className="overflow-visible text-black"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
          <rect
            className="transition-all"
            y={0}
            width="20"
            height="2"
            rx="1"
            fill="black"
            transform={`rotate(${openNavigation ? "45" : "0"})`}
          />
          <rect
            className="transition-all"
            y={10}
            width="20"
            height="2"
            rx="1"
            fill="black"
            transform={`rotate(${openNavigation ? "-45" : "0"})`}

          />
    </svg>
  );
};

export default MenuSvg;
