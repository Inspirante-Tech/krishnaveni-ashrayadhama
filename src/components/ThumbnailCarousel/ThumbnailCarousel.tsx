// import React, { useState, useEffect, useCallback } from 'react';
// import { EmblaOptionsType } from 'embla-carousel';
// import useEmblaCarousel from 'embla-carousel-react';
// import Image from 'next/image';
// import styles from '../styles/EmblaCarousel.module.css';

// type Thumbnail = {
//   id: string;
//   image: string;
//   title: string;
//   alt: string;
// };

// type PropType = {
//   thumbnails: Thumbnail[];
//   options?: EmblaOptionsType;
//   onThumbnailClick?: (thumbnail: Thumbnail) => void;
// };

// const ThumbnailCarousel: React.FC<PropType> = ({ thumbnails, options, onThumbnailClick }) => {
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
//   const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
//     containScroll: 'keepSnaps',
//     dragFree: true,
//   });

//   const onThumbClick = useCallback(
//     (index: number) => {
//       if (!emblaMainApi || !emblaThumbsApi) return;
//       emblaMainApi.scrollTo(index);
//       onThumbnailClick && onThumbnailClick(thumbnails[index]);
//     },
//     [emblaMainApi, emblaThumbsApi, thumbnails, onThumbnailClick]
//   );

//   const onSelect = useCallback(() => {
//     if (!emblaMainApi || !emblaThumbsApi) return;
//     setSelectedIndex(emblaMainApi.selectedScrollSnap());
//     emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
//   }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

//   useEffect(() => {
//     if (!emblaMainApi) return;
//     onSelect();
//     emblaMainApi.on('select', onSelect).on('reInit', onSelect);
//   }, [emblaMainApi, onSelect]);

//   return (
//     <div className={styles.embla}>
//       <div className={styles.embla__viewport} ref={emblaMainRef}>
//         <div className={styles.embla__container}>
//           {thumbnails.map((thumbnail) => (
//             <div key={thumbnail.id} className={styles.embla__slide}>
//               <Image
//                 src={thumbnail.image}
//                 width={500}
//                 height={500}
//                 alt={thumbnail.alt}
//                 className="rounded-t aspect-[1.2]"
//               />
//               <div className="p-2">
//                 <h2 className="text-xl">{thumbnail.title}</h2>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className={styles.emblaThumbs}>
//         <div className={styles.emblaThumbs__viewport} ref={emblaThumbsRef}>
//           <div className={styles.emblaThumbs__container}>
//             {thumbnails.map((thumbnail, index) => (
//               <div key={thumbnail.id} onClick={() => onThumbClick(index)} className={`${styles.emblaThumbs__slide} ${index === selectedIndex ? styles.emblaThumbs__slide__selected : ''}`}>
//                 <Image
//                   src={thumbnail.image}
//                   width={100}
//                   height={100}
//                   alt={thumbnail.alt}
//                   className="rounded aspect-[1.2]"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ThumbnailCarousel;
import React, { useState, useEffect, useCallback } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import styles from '../styles/EmblaCarousel.module.css';

type Thumbnail = {
  id: string;
  image: string;
  title: string;
  alt: string;
};

type PropType = {
  thumbnails: Thumbnail[];
  options?: EmblaOptionsType;
  onThumbnailClick?: (thumbnail: Thumbnail) => void;
};

const ThumbnailCarousel: React.FC<PropType> = ({ thumbnails, options, onThumbnailClick }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
      // onThumbnailClick && onThumbnailClick(thumbnails[index]); // Removed callback here
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on('select', onSelect).on('reInit', onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaMainRef}>
        <div className={styles.embla__container}>
          {thumbnails.map((thumbnail, index) => (
            <div key={thumbnail.id} className={styles.embla__slide} onClick={() => onThumbnailClick && onThumbnailClick(thumbnail)}>
              <Image
                src={thumbnail.image}
                width={500}
                height={500}
                alt={thumbnail.alt}
                className="rounded-t aspect-[1.2]"
              />
              <div className="p-2">
                <h2 className="text-xl">{thumbnail.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.emblaThumbs}>
        <div className={styles.emblaThumbs__viewport} ref={emblaThumbsRef}>
          <div className={styles.emblaThumbs__container}>
            {thumbnails.map((thumbnail, index) => (
              <div key={thumbnail.id} onClick={() => onThumbClick(index)} className={`${styles.emblaThumbs__slide} ${index === selectedIndex ? styles.emblaThumbs__slide__selected : ''} `}>
                <Image
                  src={thumbnail.image}
                  width={100}
                  height={100}
                  alt={thumbnail.alt}
                  className="rounded aspect-[1.2] "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThumbnailCarousel;

