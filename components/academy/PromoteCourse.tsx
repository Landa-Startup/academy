import React from 'react';

export default function PromoteCourse({ image }: { image: string }) {
  return (
    <div
      className="flex h-[640px] flex-col items-center"
      style={{
        backgroundImage: `url('${image}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="flex w-full items-center justify-center bg-[#FDD30A] py-2 text-7xl text-white">
        Seo Course
      </div>
      <div className="mt-16 flex w-[990px] flex-col items-center text-4xl font-medium leading-10 tracking-widest text-white">
        <br />
        Elevate your online impact with our SEO course at Landa Academy! Master
        search engine optimization, from keywords to cutting-edge strategies.
        Join us now and amplify your digital presence!
        <br />
        <button className="btn mt-10 rounded-sm border-none bg-white px-8 text-black">
          Register Now
        </button>
      </div>
    </div>
  );
}
