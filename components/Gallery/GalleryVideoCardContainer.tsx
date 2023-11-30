import React from 'react';
import GalleryVideoCard from './GalleryVideoCard';
import { galleryVideos } from '../Constant/constant';

export default function GalleryVideoCardContainer() {
  return (
    <div className="grid grid-cols-2 justify-items-center gap-2">
      {galleryVideos.map((video, index) => (
        <GalleryVideoCard key={index} url={video.url} />
      ))}
    </div>
  );
}
