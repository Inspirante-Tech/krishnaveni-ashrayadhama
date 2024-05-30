import React from 'react';

interface FacilityCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const FacilityCard: React.FC<FacilityCardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="h-72 w-72 flex items-center p-4">
      <div className="p-12 gap-2.5 h-72 text-center bg-secondary-400 flex flex-col items-center justify-center rounded-lg">
        <div>
          <img src={imageSrc} className="h-28 w-28 rounded-full" alt="facility" />
        </div>
        <p className="bold">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FacilityCard;
