"use client";
import React, { useState } from "react";
import GalleryImageCardContainer from "./GalleryImageCardContainer";
import GalleryVideoCardContainer from "./GalleryVideoCardContainer";

export default function GalleryButtonsContainer() {
  const [currentMode, setCurrentMode] = useState("photos"); // Default mode is 'photos'

  const handleModeChange = (mode: any) => {
    setCurrentMode(mode);
  };

  return (
    <div>
      <div className="flex gap-9 justify-center my-11">
        <button
          className={`btn w-[160px] md:w-[220px] ${
            currentMode === "photos" ? "bg-[#B3DC99]" : "bg-[#ECEFEF]"
          } text-black`}
          onClick={() => handleModeChange("photos")}
        >
          Photos
        </button>
        <button
          className={`btn w-[160px] md:w-[220px] ${
            currentMode === "videos" ? "bg-[#B3DC99]" : "bg-[#ECEFEF]"
          } text-black`}
          onClick={() => handleModeChange("videos")}
        >
          Videos
        </button>
      </div>
      <div className="main-section">
        {currentMode === "photos" ? (
          <div>
            {/* Render your Photos content here */}
            <GalleryImageCardContainer />
          </div>
        ) : (
          <div>
            {/* Render your Videos content here */}
            <GalleryVideoCardContainer />
          </div>
        )}
      </div>
    </div>
  );
}
