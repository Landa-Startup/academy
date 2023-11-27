import React from 'react';
import GalleryVideoCard from './GalleryVideoCard';
export default function GalleryVideoCardContainer() {
  const videos = [
    {
      url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
    },
    {
      url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
    },
    {
      url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
    },
    {
      url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
    },
    {
      url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
    },
    {
      url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
    }
  ];
  return (
    <div className="grid grid-cols-2 justify-items-center gap-2">
      {videos.map((video, index) => (
        <GalleryVideoCard key={index} url={video.url} />
      ))}
    </div>
  );
}
