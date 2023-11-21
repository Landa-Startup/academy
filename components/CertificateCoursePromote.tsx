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
        <div className="text-black w-28 h-28 relative">
          <Image
            className="object-cover rounded-full"
            alt={course}
            src={`/static/images/Academy/${image}`}
            layout="fill"
          />
        </div>
        <div className="flex flex-col text-black font-barlow">
          <span className="text-xl">{course}</span>
          <div className="flex gap-1">
            <div className="w-5 h-5 relative">
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
