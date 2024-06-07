

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
  initialIndex?: number;
  onThumbnailClick?: (index: number) => void;
};

const ThumbnailCarousel: React.FC<PropType> = ({ thumbnails, options, initialIndex = 0, onThumbnailClick }) => {
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
      setSelectedIndex(index);
      onThumbnailClick && onThumbnailClick(index);
    },
    [emblaMainApi, emblaThumbsApi, onThumbnailClick]
  );

  const handleSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi]);

  useEffect(() => {
    if (!emblaMainApi) return;
    handleSelect();
    emblaMainApi.scrollTo(initialIndex);
    emblaMainApi.on('select', handleSelect).on('reInit', handleSelect);
  }, [emblaMainApi, handleSelect, initialIndex]);

  return (
    <div className={`space-y-10 md:space-y-0 ${styles.embla}`}>
      <div className={styles.embla__viewport} ref={emblaMainRef}>
        <div className={styles.embla__container}>
          {thumbnails.map((thumbnail, index) => (
            <div key={thumbnail.id} className={styles.embla__slide} onClick={() => onThumbClick(index)}>
              <Image
                src={thumbnail.image}
                width={500}
                height={500}
                alt={thumbnail.alt}
                className={`rounded-t aspect-[1.2]  ${index === selectedIndex ? styles.selected : ''}`}
                priority={false}
              />
              <div className="p-2">
                <h2 className="text-2xl font-bold">{thumbnail.title}</h2>
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
                  width={50}
                  height={50}
                  alt={thumbnail.alt}
                  className="rounded aspect-[1.2] object-cover caption"
                  priority={false}
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
