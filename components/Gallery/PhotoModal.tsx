'use client';
import Image from 'next/image';
// import React, { useState } from 'react';
import Modal from 'react-modal';
import XLg from '../icons/common/XLg';
import Chevron from '../common/Chevron';
import { useState } from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    padding: '0px'
  }
};

Modal.setAppElement('.drawer'); // Set the root element for accessibility

function PhotoModal({
  isOpen,
  onRequestClose,
  imageUrl,
  closeModal
}: {
  isOpen: boolean;
  onRequestClose: () => void;
  imageUrl: string;
  closeModal: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < imageUrl.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Photo Modal"
    >
      <div className="absolute left-3 top-3 z-10">
        <XLg onClick={closeModal} />
      </div>
      <div className="flex items-center gap-2">
        <div className="absolute left-0 top-1/2 z-10" onClick={handlePrevClick}>
          <Chevron direction="left" />
        </div>
        <div className="relative h-full w-[350px] select-none md:w-[700px]">
          <Image
            className="rounded-md"
            src={imageUrl}
            alt="Landa Gallery"
            width={1000}
            height={1000}
          />
        </div>
        <div
          className="absolute right-0 top-1/2 z-10"
          onClick={handleNextClick}
        >
          <Chevron direction="right" />
        </div>
      </div>
    </Modal>
  );
}

export default PhotoModal;
