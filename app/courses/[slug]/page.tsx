'use client';
import Banner from '@/components/common/Banner';
import IconPhoneAcademy from '@/components/icons/IconPhoneAcademy';
import IconStar from '@/components/icons/IconStar';
import IconYellow from '@/components/icons/IconYellow';
import FooterSecondary from '@/components/layout/FooterSecondary';
import React, { useEffect, useState } from 'react';
import { Course } from '@/types/global';
import UlList from '@/components/List/UlList';

const L = ["Basic concepts related to SEO", "SEO tools", "Keyword research", "On-Page and Off-Page SEO Optimization", "Familiarity with Technical SEO", "Understanding Google Algorithms and Bots", "Speed Optimization", "Semantic Structure in HTML", "Meta Tags", "Comprehensive Training on Search Console", "Schema Structure", "Keyword Planner", "Enhancing Website Security", "DNS Server"]

const L1 = ["Web Server", "Hosting Server", "Domain", "Social Media Marketing (SMM)", "Google Panda Algorithm", "Choosing the Right Domain", "nalysis and Resolution of All Technical Site Issues", "Schema Markup", "Familiarity with MOZ", "Black Hat SEO", "And dozens of other related topics"]

export default function Page({
  params: { slug }
}:
{
  params: { slug: string}
}) {
  const [course, setCourse] = useState<Course | null>(null);

  const lowerSlug = slug.toLowerCase();

  console.log(lowerSlug)

  let formattedSlug = "english";


  switch (lowerSlug) {
    case "english":
      formattedSlug = "english"
      break;
    case "python-course":
      formattedSlug = "seo"
      break;
    case "ux-workshop":
      formattedSlug = "seo"
      break;
    case "icdl-Workshop":
      formattedSlug = "seo"
      break;
    case "ai-webinar":
      formattedSlug = "seo"
      break;
    case "front-end-course":
      formattedSlug = "seo"
      break;
    case "digital-marketing":
      formattedSlug = "seo"
      break;
    case "business":
      formattedSlug = "seo"
      break;
    default:
      formattedSlug = "english"
      break;
  } // on the backend we have only the seo and english courses . 
    // the code above makes sure to redirect to one of these courses pages ,
    // in case of clicking on the other course cards .


  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch(
      `https://academy-back.landaholding.com/course/details/${formattedSlug}/?format=json`
    )
      .then((response) => response.json())
      .then((data) => setCourse(data))
      .catch((error) => console.error('Error fetching data:', error));
  }); // The empty dependency array ensures this effect runs once when the component mounts

  if (!course) {
    // You can add a loading state here
    return <div>Loading...</div>;
  }
  return (
    <div>
      <>
        <Banner image="/static/images/Academy/Banner/seo.jpg" title="Course" />
        <div className="container mx-auto my-10 px-5 font-barlow font-normal text-black lg:p-10">
          <div className="text-center">
            <p className="mb-10 text-4xl tracking-widest	text-[#FDD30A]">
              Landa Academy
            </p>
          </div>
          <div>
            <div className="grid grid-cols-3 justify-items-center">
              <div className="col-span-3 py-5 text-center lg:col-span-1">
                <div>
                  <div>
                    <p className="text-2xl">
                      {`A two-day ${course.title} course consisting of ${course.sessions} sessions, each lasting ${course.sessionDuration} ${course.sessionDurationType}, will be conducted.`}
                    </p>
                  </div>
                  <div className="mx-20 my-5 bg-[#F1F8EC] py-5">
                    <p className="my-1 text-2xl">Course Price</p>
                    <p className="my-1 text-3xl line-through decoration-[#FDD30A] decoration-wavy">
                      {`${course.price}`}
                    </p>
                    <p className="my-1 text-3xl">{`price after discount here`}</p>
                  </div>
                  <div className="mx-20  my-5 bg-[#F1F8EC] py-5">
                    <p className="my-1 text-2xl">Contact Us</p>
                    <div className="my-1 flex justify-center ">
                      <IconPhoneAcademy />
                      <a
                        className="my-1 ml-1 text-2xl  text-[#80C555]"
                        href="tel:09120539563"
                      >
                        09120539563
                      </a>
                    </div>
                    <div className="my-1 flex justify-center ">
                      <IconPhoneAcademy />
                      <a
                        className="my-1 ml-1 mr-5 text-2xl text-[#80C555]"
                        href="tel:03131311914"
                      >
                        03131311914
                      </a>
                    </div>
                  </div>
                  <div className="mt-10">
                    <a
                      role="button"
                      className="hover-bg-[#fcda30] btn mb-10 rounded-none border-0 bg-[#FDD30A] px-14	text-xl  text-white"
                      href={course.payUrl}
                    >
                      Buy Now
                    </a>
                  </div>
                  <div>
                    <p className="text-2xl font-medium ">
                      Benefits of participating in the {course.title} course
                    </p>
                  </div>
                  <div className="m-10 flex bg-[#FFFBE6] px-3 py-5">
                    <IconStar />
                    <span className="ml-3 text-xl">
                      {`At the end of the ${course.title} course, a valid and questionable certificate will be awarded to you by Landa Academy.`}
                    </span>
                  </div>
                  <div className="m-10 flex bg-[#FFFBE6] px-3 py-5">
                    <IconStar />
                    <span className="ml-3 text-xl">
                      {`Also for the best of this course There is an employment condition.`}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-3 p-5 lg:col-span-2 lg:px-20">
                <div>
                  <div className="flex">
                    <IconYellow />
                    <span className="ml-3 text-4xl">
                      Overview of {course.title} Course
                    </span>
                  </div>
                  <div>
                    <p className="my-5 text-xl leading-8">
                      {course.description}
                    </p>
                  </div>
                  <div className="mb-10 mt-16 flex">
                    <IconYellow />
                    <span className="ml-3 text-4xl font-medium">Headline</span>
                  </div>
                  <div>
                    <div className="collapse collapse-arrow rounded-none">
                      <input type="checkbox" className="peer" />
                      <div className="collapse-title bg-[#F1F8EC]	text-2xl font-medium text-[#3D5656]">
                        First Day
                      </div>
                      {/* <div className="collapse-content bg-white text-[#3D5656]">
                        <ul className="my-5 list-image-[url(/static/images/Academy/green.png)] pl-5	text-xl	leading-9 text-black	 ">
                          <li>Basic concepts related to SEO</li>
                          <li>SEO tools</li>
                          <li>Keyword research</li>
                          <li>On-Page and Off-Page SEO Optimization</li>
                          <li>Familiarity with Technical SEO</li>
                          <li>Understanding Google Algorithms and Bots</li>
                          <li>Speed Optimization</li>
                          <li>Semantic Structure in HTML</li>
                          <li>Meta Tags</li>
                          <li>Comprehensive Training on Search Console</li>
                          <li>Schema Structure</li>
                          <li>Keyword Planner</li>
                          <li>Enhancing Website Security</li>
                          <li>DNS Server</li>
                        </ul>
                      </div> */}
                      <UlList list={L} style1="collapse-content bg-white text-[#3D5656]" style2="my-5 list-image-[url(/static/images/Academy/green.png)] pl-5	text-xl	leading-9 text-black" style3="" />
                    </div>
                  </div>
                  <div>
                    <div className="collapse-arrow collapse rounded-none">
                      <input type="checkbox" className="peer" />
                      <div className="collapse-title bg-[#F1F8EC] 	text-2xl font-medium text-[#3D5656]">
                        Second Day
                      </div>
                      {/* <div className="collapse-content bg-white text-[#3D5656]">
                        <ul className="my-5 list-image-[url(/static/images/Academy/green.png)]  pl-2 text-xl 	leading-9 text-black">
                          <li>Web Server</li>
                          <li>Hosting Server</li>
                          <li>Domain</li>
                          <li>Social Media Marketing (SMM)</li>
                          <li>Google Panda Algorithm</li>
                          <li>Choosing the Right Domain</li>
                          <li>
                            Analysis and Resolution of All Technical Site Issues
                          </li>
                          <li>Schema Markup</li>
                          <li>Familiarity with MOZ</li>
                          <li>Black Hat SEO</li>
                          <li>And dozens of other related topics</li>
                        </ul>
                      </div> */}

                      <UlList list={L1} style1='collapse-content bg-white text-[#3D5656]' style2='my-5 list-image-[url(/static/images/Academy/green.png)]  pl-2 text-xl 	leading-9 text-black' style3=''/>           
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      <FooterSecondary />
    </div>
  );
}
