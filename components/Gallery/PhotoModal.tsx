'use client';
import Image from 'next/image';
// import React, { useState } from 'react';
import Modal from 'react-modal';
import XLg from '../icons/common/XLg';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('.drawer'); // Set the root element for accessibility

function PhotoModal({ isOpen, onRequestClose, imageUrl, closeModal }: any) {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const handlePrevClick = () => {
  //   if (currentIndex > 0) {
  //     setCurrentIndex(currentIndex - 1);
  //   }
  // };

  // const handleNextClick = () => {
  //   if (currentIndex < imageUrl.length - 1) {
  //     setCurrentIndex(currentIndex + 1);
  //   }
  // };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Photo Modal"
    >
      <XLg onClick={closeModal} />
      <div className="flex items-center gap-2">
        {/* <div onClick={handlePrevClick}>
          <Chevron direction="left" />
        </div> */}
        <div className="relative h-[240px] w-[350px] md:h-[480px] md:w-[700px]">
          <Image
            className="rounded-md"
            src={imageUrl}
            alt="Landa Gallery"
            width={1000}
            height={1000}
          />
        </div>
        {/* <div onClick={handlePrevClick}>
          <Chevron direction="right" />
        </div> */}
      </div>
    </Modal>
  );
}

export default PhotoModal;
