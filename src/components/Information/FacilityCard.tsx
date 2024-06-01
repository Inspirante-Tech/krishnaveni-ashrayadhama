import React, { FC } from 'react';

interface FacilityCardProps {
  key:number;
  title: string;
  image: string;
  description: string;
}

const FacilityCard: FC<FacilityCardProps> = (props) => {
  return(
    <div className='flex justify-evenly mt-8  transition duration-200 ease-out hover:-translate-y-2 shadow-lg
'>
        <div key={props.key} className='relative m-2'>
              {/* <img src={props.image} alt='facility-img' className='mt-8 max-w-full h-auto'/> */}
              <img src={props.image} alt='facility-img' className='mt-8 w-40 h-40 md:w-36 md:h-36 rounded-full object-cover object-center mx-auto'/>
              <div className='m-4 text-center flex flex-col space-y-4'>
                    <h1 className='text-lg'>{props.title}</h1>
                    <h3 className='text-md'>{props.description}</h3>
              </div>
        </div>
    </div>
  )
}

export default FacilityCard;