import React from 'react';

export default function PlayButton() {
  return (
    <div className="relative inline-flex cursor-pointer items-start gap-[10px]">
      <div className="relative h-[130px] w-[130px] rounded-[65px] border-[0.5px] border-solid border-white" />
      <div className="absolute left-[5px] top-[5px] h-[120px] w-[120px] rounded-[60px] bg-white" />
      <PlayButton />
    </div>
  );
}
