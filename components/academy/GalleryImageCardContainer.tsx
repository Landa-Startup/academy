import React from 'react';
import GalleryImageCard from './GalleryImageCard';

export default function GalleryImageCardContainer() {
  const images = [
    {
      src: '/static/images/Academy/gallery/all/1.jpg',
      title: 'Kashan Tour'
    },
    {
      src: '/static/images/Academy/gallery/all/2.jpg',
      title: 'Yalda 1401'
    },
    {
      src: '/static/images/Academy/gallery/all/3.jpg',
      title: 'Kashan Tour'
    },
    {
      src: '/static/images/Academy/gallery/all/4.jpg',
      title: 'Noroz 1401'
    },
    {
      src: '/static/images/Academy/gallery/all/5.jpg',
      title: 'Desert Tour'
    },
    {
      src: '/static/images/Academy/gallery/all/6.jpg',
      title: 'Seo Course'
    },
    {
      src: '/static/images/Academy/gallery/all/7.jpg',
      title: 'Start up School'
    },
    {
      src: '/static/images/Academy/gallery/all/8.jpg',
      title: 'Landa Academy'
    },
    {
      src: '/static/images/Academy/gallery/all/9.jpg',
      title: 'Kashan Tour'
    },
    {
      src: '/static/images/Academy/gallery/all/10.jpg',
      title: 'Landa Academy'
    },
    {
      src: '/static/images/Academy/gallery/all/11.jpg',
      title: 'Landa Academy'
    },
    {
      src: '/static/images/Academy/gallery/all/12.jpg',
      title: 'Start up School'
    },
    {
      src: '/static/images/Academy/gallery/all/13.png',
      title: 'Landa Academy'
    },
    {
      src: '/static/images/Academy/gallery/all/14.jpg',
      title: 'Landa Academy'
    },
    {
      src: '/static/images/Academy/gallery/all/15.jpg',
      title: 'Noroz 1401'
    },
    {
      src: '/static/images/Academy/gallery/all/16.jpg',
      title: 'Noroz 1401'
    },
    {
      src: '/static/images/Academy/gallery/all/17.jpg',
      title: 'Landa Academy'
    },
    {
      src: '/static/images/Academy/gallery/all/18.jpg',
      title: 'Kashan Tour'
    },
    {
      src: '/static/images/Academy/gallery/all/19.jpg',
      title: 'Team Working'
    },
    {
      src: '/static/images/Academy/gallery/all/20.jpg',
      title: 'Kashan Tour'
    },
    {
      src: '/static/images/Academy/gallery/all/21.jpg',
      title: 'Seo Course'
    },
    {
      src: '/static/images/Academy/gallery/all/22.jpg',
      title: 'Kashan Tour'
    },
    {
      src: '/static/images/Academy/gallery/all/23.jpg',
      title: 'Kashan Tour'
    },
    {
      src: '/static/images/Academy/gallery/all/24.jpg',
      title: 'Start up School'
    },
    {
      src: '/static/images/Academy/gallery/all/25.jpg',
      title: 'Noroz 1401'
    },
    {
      src: '/static/images/Academy/gallery/all/26.png',
      title: 'Start up School'
    },
    {
      src: '/static/images/Academy/gallery/all/27.jpg',
      title: 'Developers'
    },
    {
      src: '/static/images/Academy/gallery/all/28.jpg',
      title: 'Dr.MoradiMehr Birthday'
    },
  ];
  return (
    <div
      className="grid grid-cols-2 gap-y-5 md:gap-24 md:mx-32 pb-7 justify-items-center"
    >
      {images.map((image, index) => (
        <GalleryImageCard key={index} src={image.src} title={image.title} />
      ))}
    </div>
  );
}