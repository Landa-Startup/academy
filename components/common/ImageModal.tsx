"use client"
import React, { useState } from 'react';
import Image from 'next/image';

interface ImageModalProps {
    src: string;
    alt: string;
    width: number;
    height: number;
}

export default function ImageModal({ src, alt, width, height }: ImageModalProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function toggleModal() {
        setIsModalOpen(!isModalOpen);
    }

    return (
        <>
            <div onClick={toggleModal}>
                <Image
                    loading="lazy"
                    width={width}
                    height={height}
                    quality={100}
                    alt={alt}
                    className="h-[155px] w-[173px] object-cover md:h-[243px] md:w-[389px]"
                    src={src}
                />
            </div>
            <div className={`modal ${isModalOpen ? 'open' : ''}`} onClick={toggleModal}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <Image loading="lazy" width={800} height={600} quality={100} alt={alt} src={src} />
                </div>
            </div>
        </>
    );
}