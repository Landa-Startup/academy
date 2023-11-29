import React from 'react';
// import AboutUsProfileCard from './AboutUsProfileCard';
import AboutusPersonalTabs from './AboutusPersonalTabs';

export default function AboutUsProfile() {
  const cardsData = [
    {
      image: '/static/images/our-team/Personals/a1.png',
      name: 'Rasoul Moradimehr',
      position: ' CEO',
      links: {
        linkedin: 'https://www.linkedin.com/in/rasoul-moradi-mehr/',
        whatsapp: 'wa.me/+989134233863',
        email: 'mailto:rasoulmoradimehr@gmail.com',
        website: 'https://moradimehr.com/',
        instagram: 'https://instagram.com/dr.moradimehr.rasoul?igshid=MzRlODBiNWFlZA==',
      },
    },
    {
      image: '/static/images/4-1.png',
      name: 'MORTEZA JAFARI',
      position: 'International Relations',
      links: {
        linkedin: 'https://www.linkedin.com/in/morteza-jafari-5b40b63a',
        whatsapp: 'https://api.whatsapp.com/send?phone=+14705199691',
        email: 'mailto:morteza_jafari49@yahoo.com',
        website: 'https://mortezajafari.ca/',
        instagram: 'https://instagram.com/jafari.irimmigration.ca?igshid=MzRlODBiNWFlZA==',
      },
    },
    {
      image: '/static/images/our-team/Personals/a2.png',
      name: 'Hadi Hasanpour',
      position: 'COTB',
      links: {
        linkedin: 'https://www.linkedin.com/in/hadi-hasanpour',
        whatsapp: 'https://wa.me/+12892693933',
        email: 'mailto:hadihasanpor@gmail.com',
        website: 'https://www.hadihasanpour.ca/',
        instagram: 'https://instagram.com/dr.hadihasanpour?igshid=MzRlODBiNWFlZA==',
      },
    },
  ];

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
