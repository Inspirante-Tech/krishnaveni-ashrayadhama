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
        x={0}
        y={openNavigation ? 9 : 4}
        width="20"
        height="2"
        rx="1"
        fill="black"
        stroke="black"
        strokeWidth="0.5"
        transform={openNavigation ? "rotate(45 10 10)" : "rotate(0)"}
      />
      <rect
        className="transition-all"
        x={0}
        y={openNavigation ? 9 : 14}
        width="20"
        height="2"
        rx="1"
        fill="black"
        stroke="black"
        strokeWidth="0.5"
        transform={openNavigation ? "rotate(-45 10 10)" : "rotate(0)"}
      />
    </svg>
  );
};

export default MenuSvg;
