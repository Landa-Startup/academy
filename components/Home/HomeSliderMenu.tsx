// 'use client'
// import React, { useState, useEffect } from 'react';
import Button from '../common/Button';
import CourseItem from './CourseItem';
import React from 'react';
// interface SliderNew {
//   title: string;
//   image : string;
//   date : string;
// }

// interface Course {
//   title: string;
//   thumbnail: string;
//   date: string;
//   active?: boolean;
//   price: number;
//   slug: string;
// }

const SliderMenu = () => {

  const cardData = [
    {
      title: 'Business',
      image: '/static/images/Academy/courses/Rectangle 3014 (2).png',
      date: '27/Dec/2023'
    },
    {
      title: 'AI webinar',
      image: '/static/images/Academy/courses/Rectangle 3011.png',
      date: '27/Dec/2023'
    },
    {
      title: 'SEO course',
      image: '/static/images/Academy/courses/Rectangle 3014.png',
      date: '27/Dec/2023'
    },
    {
      title: 'Python course',
      image: '/static/images/Academy/courses/Rectangle 3016.png',
      date: '27/Dec/2023'
    },
    {
      title: 'UX Workshop',
      image: '/static/images/Academy/courses/Rectangle 3015.png',
      date: '27/Dec/2023'
    },
    {
      title: 'ICDL Workshop',
      image: '/static/images/Academy/courses/Rectangle 3011 (1).png',
      date: '27/Dec/2023'
    },
    {
      title: 'Front-end course',
      image:
        '/static/images/Academy/courses/027fae0dc46b4eacee7dbeeda27b2fdb.jpg',
      date: '27/Dec/2023'
    },
    {
      title: 'Digital marketing',
      image:
        '/static/images/Academy/courses/027fae0dc46b4eacee7dbeeda27b2fdb.jpg',
      date: '27/Dec/2023'
    },
    {
      title: 'Business',
      image: '/static/images/Academy/courses/Rectangle 3014 (2).png',
      date: '27/Dec/2023'
    },
    {
      title: 'AI webinar',
      image: '/static/images/Academy/courses/Rectangle 3011.png',
      date: '27/Dec/2023'
    },
    {
      title: 'SEO course',
      image: '/static/images/Academy/courses/Rectangle 3014.png',
      date: '27/Dec/2023'
    },
    {
      title: 'Python course',
      image: '/static/images/Academy/courses/Rectangle 3016.png',
      date: '27/Dec/2023'
    },
    {
      title: 'UX Workshop',
      image: '/static/images/Academy/courses/Rectangle 3015.png',
      date: '27/Dec/2023'
    },
    {
      title: 'ICDL Workshop',
      image: '/static/images/Academy/courses/Rectangle 3011 (1).png',
      date: '27/Dec/2023'
    },
    {
      title: 'Front-end course',
      image:
        '/static/images/Academy/courses/027fae0dc46b4eacee7dbeeda27b2fdb.jpg',
      date: '27/Dec/2023'
    },
    {
      title: 'Digital marketing',
      image:
        '/static/images/Academy/courses/027fae0dc46b4eacee7dbeeda27b2fdb.jpg',
      date: '27/Dec/2023'
    }
  ];

  // const [data, setData] = useState<Course[]>([]);

  // useEffect(() => {
  //   // Fetch data from the API when the component mounts
  //   fetch('https://academy-back.landaholding.com/course/list?format=json')
  //     .then((response) => response.json())
  //     .then((data) => setData(data))
  //     .catch((error) => console.error('Error fetching data:', error));
  // }, []);

  return (
    <div className="h-screen snap-start bg-[#3D5656] py-10" id="Courses">
      <div className="container mx-auto">
        <div className="mt-12">
          <div className="text-center font-condensed text-2xl font-normal leading-[50px]  tracking-[11.20px] text-white md:text-3xl">
            LANDA ACADEMY
          </div>
          <div className="text-center font-gilda text-4xl font-normal leading-[50px] tracking-[3.20px] text-white md:text-5xl">
            Our Courses
          </div>
        </div>
        {/* mx-2 flex gap-4 relative overflow-hidden whitespace-nowrap md:h-[486px] md:gap-12 */}
        <div className="slider relative m-auto grid w-11/12 overflow-hidden whitespace-nowrap md:h-[486px]">
          <div className="w-[calc(250px * 16)] scroll hover:pause flex">
            {cardData.map(({title, image} : {title: string, image: string}, index: number) => (
              <CourseItem key={index} title={title} image={image} />
            ))}
          </div>
        </div>
        <Button size='visit' goto='/courses' text='Visit More' addedClass='mx-auto -my-8'/>
      </div>
      <div className="mt-4 flex justify-center"></div>
    </div>
  );
};

export default SliderMenu;
