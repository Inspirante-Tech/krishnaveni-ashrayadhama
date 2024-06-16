"use client"
import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface ImageWithFallbackProps extends ImageProps {
    fallbackSrc?: string
}

const ImageWithFallback = (props: ImageWithFallbackProps) => {
    const { src, fallbackSrc="/fallback_profile.webp", alt, ...rest } = props;
    const [imgSrc, setImgSrc] = useState(src);

    return (
        <Image
            {...rest}
            src={imgSrc}
            alt={alt}
            onError={() => {
                setImgSrc(fallbackSrc);
            }}
        />
    );
};

export default ImageWithFallback