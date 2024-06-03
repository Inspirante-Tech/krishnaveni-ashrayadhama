import Image from 'next/image';
import React, { FC } from 'react';

interface FacilityCardProps {
  key:number;
  title: string;
  image: string;
  description: string;
}

const FacilityCard: FC<FacilityCardProps> = (props) => {
  return(
    <div className='flex justify-evenly w-full basis-auto md:basis-[45%] lg:basis-auto lg:max-w-64 transition duration-200 ease-out hover:-translate-y-2 shadow-lg hover:shadow-2xl rounded-md
    '>
        <div className='relative pt-4'>
              <Image src={props.image} alt='facility-img' className='w-40 h-40 md:w-36 md:h-36 rounded-full object-cover object-center mx-auto' height={200} width={200}/>
              <div className='m-4 text-center flex flex-col space-y-4'>
                    <h1 className='text-lg font-semibold'>{props.title}</h1>
                    <h3 className='text-md '>{props.description}</h3>
              </div>
        </div>
    </div>
  )
}

export default FacilityCard;