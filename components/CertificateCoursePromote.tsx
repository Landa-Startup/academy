import Image from 'next/image';
import React from 'react';
import Button from './common/Button';

export default function CertificateCoursePromote({
  course,
  image
}: {
  course: string;
  image: string;
}) {
  return (
    <div className="flex justify-between gap-3">
      <div className="flex gap-3">
        <div className="relative h-28 w-28 text-black">
          <Image
            className="rounded-full object-cover"
            alt={course}
            src={`/static/images/Academy/${image}`}
            layout="fill"
          />
        </div>
        <div className="flex flex-col font-barlow text-black">
          <span className="text-xl">{course}</span>
          <div className="flex gap-1">
            <div className="relative h-5 w-5">
              <Image
                alt="Logo"
                src={'/static/images/Academy/Logo.svg'}
                layout="fill"
              />
            </div>
            <span>Landa Academy</span>
          </div>
          <p className="2/4">
            The course was designed to provide participants with a ...
          </p>
        </div>
      </div>
      <Button goto="/" size="not" text="Enroll" />
    </div>
  );
}
