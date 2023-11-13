import React from "react";
import GalleryVideoCard from "./GalleryvideoCard";

export default function GalleryVideoCardContainer() {
  const videos = [
    {
      url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    },
    {
      url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    },
    {
      url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    },
    {
      url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    },
    {
      url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    },
    {
      url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    },
  ];
  return (
    <div className="grid grid-cols-2 justify-items-center gap-2">
      {videos.map((video) => (
        <GalleryVideoCard url={video.url} />
      ))}
    </div>
  );
}