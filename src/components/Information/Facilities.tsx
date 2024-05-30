// Facilities.tsx
import React from 'react';
import FacilityCard from './FacilityCard';

export default function Facilities() {
  const facilities = [
    { imageSrc: '/facilities.jpg', title: 'Lorem ipsum dollor', description: 'Lorem, ipsum dolor sit' },
    { imageSrc: '/facilities.jpg', title: 'Another title', description: 'Another description' },
    { imageSrc: '/facilities.jpg', title: 'Yet another title', description: 'Yet another description' },
    { imageSrc: '/facilities.jpg', title: 'Title 4', description: 'Description 4' },
    { imageSrc: '/facilities.jpg', title: 'Title 5', description: 'Description 5' },
    { imageSrc: '/facilities.jpg', title: 'Title 6', description: 'Description 6' },
    { imageSrc: '/facilities.jpg', title: 'Title 7', description: 'Description 7' },
    { imageSrc: '/facilities.jpg', title: 'Title 8', description: 'Description 8' },
  ];

  return (
    <div className="grid place-items-center w-full">
      <h2 className="text-center text-4xl font-bold font-poppins tracking-tight text-gray-900 sm:text-5xl mb-8 pt-12 sm:pt-16">Facilities</h2>
      <div className="m-auto relative w-11/12 grid place-items-center overflow-hidden">
        <div className="h-72 flex animate-scroll" style={{ width: 'calc(250px * 8)' }}>
          {facilities.map((facility, index) => (
            <FacilityCard
              key={index}
              imageSrc={facility.imageSrc}
              title={facility.title}
              description={facility.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
