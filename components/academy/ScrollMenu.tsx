"use client";
import React, { useEffect, useRef, useState } from "react";
import CourseCard from "./CourseCard";
import ArrowUp from "../icons/common/ArrowUp";

export default function ScrollMenu() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isScrolling, setIsScrolling] = useState(true); // Control scrolling with a Boolean state

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    function scrollAutomatically() {
      const scrollAmount = 1;
      if (scrollContainer != null && isScrolling) {
        // Check if scrolling is allowed
        const isScrollingLeft = scrollContainer.scrollLeft > 0;

        if (!isScrollingLeft) {
          scrollContainer.scrollLeft = scrollContainer.scrollWidth;
        } else {
          scrollContainer.scrollLeft -= scrollAmount;
        }
      }
    }

    const intervalId = setInterval(scrollAutomatically, 80); // Adjust the interval as needed.

    return () => clearInterval(intervalId);
  }, [isScrolling]); // Add isScrolling as a dependency

  // Add event listeners to stop automatic scroll on mouse enter
  const handleMouseEnter = () => {
    setIsScrolling(false); // Stop scrolling
  };

  // Add event listener to resume automatic scroll on mouse leave
  const handleMouseLeave = () => {
    setIsScrolling(true); // Resume scrolling
  };

  // Scroll function to handle both left and right scroll
  const handleScroll = (direction: "left" | "right") => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const scrollAmount = 200; // Adjust the scroll amount as needed
      if (direction === "left") {
        scrollContainer.scrollLeft -= scrollAmount;
      } else {
        scrollContainer.scrollLeft += scrollAmount;
      }
    }
  };

  const cardData = [
    {
      title: "Business",
      image: "/static/images/Academy/courses/Rectangle 3014 (2).png",
      date: "27/Dec/2023",
    },
    {
      title: "AI webinar",
      image: "/static/images/Academy/courses/Rectangle 3011.png",
      date: "27/Dec/2023",
    },
    {
      title: "SEO course",
      image: "/static/images/Academy/courses/Rectangle 3014.png",
      date: "27/Dec/2023",

      active: true,
    },
    {
      title: "Python course",
      image: "/static/images/Academy/courses/Rectangle 3016.png",
      date: "27/Dec/2023",
    },
    {
      title: "UX Workshop",
      image: "/static/images/Academy/courses/Rectangle 3015.png",
      date: "27/Dec/2023",
    },
    {
      title: 'ICDL Workshop',
      image: '/static/images/Academy/courses/Rectangle 3011 (1).png',
      date: '27/Dec/2023',
    },
    {
      title: "Front-end course",
      image:
        "/static/images/Academy/courses/027fae0dc46b4eacee7dbeeda27b2fdb.jpg",
      date: "27/Dec/2023",
    },
    {
      title: "Digital marketing",
      image:
        "/static/images/Academy/courses/027fae0dc46b4eacee7dbeeda27b2fdb.jpg",
      date: "27/Dec/2023",
    },
  ];

  return (
    <div className="bg-[#3D5656] py-10 h-screen snap-start" id="Courses">
      <div className="container mx-auto">
        <div className="font-condensed text-center text-white text-2xl md:text-3xl font-normal leading-[50px] tracking-[11.20px]">
          LANDA ACADEMY
        </div>
        <div className="font-gilda text-center text-white text-4xl md:text-5xl font-normal leading-[50px] tracking-[3.20px] mb-12">
          Our Courses
        </div>
        <div className="flex items-center mx-5">
          <button
            className="bg-gray-700 text-white md:px-4 md:py-2 p-2 md:rounded-r rounded-full"
            onClick={() => handleScroll("left")} // Adjust scroll offset as needed
          >
            <ArrowUp />
          </button>
          <div
            className="flex overflow-x-hidden md:overflow-x-hidden whitespace-nowrap mx-2 gap-4 md:gap-12 md:h-[486px]"
            ref={scrollContainerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {cardData.map((card, index) => (
              <CourseCard
                key={index}
                title={card.title}
                image={card.image}
                date={card.date}
                active={card.active}
              />
            ))}
          </div>
          <button
            className="bg-gray-700 text-white md:px-4 md:py-2 p-2 md:rounded-l rounded-full"
            onClick={() => handleScroll("right")} // Adjust scroll offset as needed
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-center mt-4"></div>
      </div>
    </div>
  );
}
