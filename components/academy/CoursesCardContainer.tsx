"use client";
import React, { useEffect, useState } from "react";
import CoursesCard from "./CoursesCard";

interface Course {
  title: string;
  image: string;
  date: string;
  active?: boolean;
}

export default function CoursesCardContainer() {
  const [courses, setCourses] = useState<Course[]>([]);
  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch("https://apigenerator.dronahq.com/api/kVDULu7p/courses")
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // The empty dependency array ensures this effect runs once when the component mounts
  return (
    <div className="grid grid-cols-2 md:gap-16 gap-y-5 justify-items-center md:px-32 mx-2">
      {courses.map((course, index) => (
        <CoursesCard
          id={index}
          key={index}
          title={course.title}
          isActive={course.active}
          backgroundImage={course.image}
        />
      ))}
    </div>
  );
}
