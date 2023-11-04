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
                    className="w-[173px] md:w-[389px] h-[155px] md:h-[243px] object-cover"
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