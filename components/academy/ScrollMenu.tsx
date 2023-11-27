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
    <div className="h-screen snap-start bg-[#3D5656] py-10" id="Courses">
      <div className="container mx-auto">
        <div className="text-center font-condensed text-2xl font-normal leading-[50px] tracking-[11.20px] text-white md:text-3xl">
          LANDA ACADEMY
        </div>
        <div className="mb-12 text-center font-gilda text-4xl font-normal leading-[50px] tracking-[3.20px] text-white md:text-5xl">
          Our Courses
        </div>
        <div className="mx-5 flex items-center">
          <button
            className="rounded-full bg-gray-700 p-2 text-white md:rounded-r md:px-4 md:py-2"
            onClick={() => handleScroll("left")} // Adjust scroll offset as needed
          >
            <ArrowUp />
          </button>
          <div
            className="mx-2 flex gap-4 overflow-x-hidden whitespace-nowrap md:h-[486px] md:gap-12 md:overflow-x-hidden"
            ref={scrollContainerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {cardData.map((card, index) => (
              <CourseCard
                key={index}
                title={card.title}
                image={card.image}
                active={card.active}
              />
            ))}
          </div>
          <button
            className="rounded-full bg-gray-700 p-2 text-white md:rounded-l md:px-4 md:py-2"
            onClick={() => handleScroll("right")} // Adjust scroll offset as needed
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
        <div className="mt-4 flex justify-center"></div>
      </div>
    </div>
  );
}
