import React from "react";
import ReactPlayer from "react-player";

export default function GalleryVideoCard({ url }: { url: string }) {
  return (
    <div>
      <ReactPlayer url={url} />
    </div>
  );
}
