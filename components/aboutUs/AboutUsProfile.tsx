import React from 'react';
// import AboutUsProfileCard from './AboutUsProfileCard';
import AboutusPersonalTabs from './AboutusPersonalTabs';
import { cardsData } from '../Constant/constant';

export default function AboutUsProfile() {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="mx-8 flex flex-col justify-items-center py-5 text-black lg:ml-64">
        <h2 className="font-condensed text-xl font-normal leading-normal tracking-widest md:text-2xl">
          PROFESSIONALS
        </h2>
        <h1 className="font-gilda text-3xl font-normal leading-normal md:text-4xl">
          Board of Directors
        </h1>
      </div>

      <div className="mx-auto mb-8 ml-8  grid grid-cols-1 space-y-20  pb-16 md:space-x-12 lg:ml-0 lg:flex lg:flex-row lg:justify-center lg:pb-28">
        {cardsData.map((card, index) => (
          <AboutusPersonalTabs
            key={index}
            image={card.image}
            name={card.name}
            position={card.position}
            linkedIn={card.links.linkedin}
            email={card.links.email}
            website={card.links.website}
            instagram={card.links.instagram}
          />
        ))}
      </div>
    </div>
  );
}
