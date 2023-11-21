import Certificate from '@/components/Certificate';
import CertificateCoursePromote from '@/components/CertificateCoursePromote';
import Image from 'next/image';
export default function CertificateAchievement() {
  return (
    <div className="flex flex-col justify-around text-white h-screen relative">
      <div className="grid grid-cols-2 justify-items-center">
        <div className="flex flex-col gap-11">
          <div className="flex flex-col gap-5 justify-start p-10 rounded-sm bg-[#fdd40a1a]">
            <h2 className="font-gilda text-[#FDD30A] text-4xl">
              CERTIFICATE OF ACHIEVEMNENT
            </h2>
            <p className="text-lg text-[#6B6B6B] font-barlow">AWARDED TO</p>
            <p className="text-[#3D5656] font-barlow capitalize text-4xl">
              MOHAMAD AMIN ASGARIAN
            </p>

            <p className="text-[#6B6B6B]"> For Participating in</p>
            <p className="font-barlow text-4xl capitalize text-[#80C555]">
              SEO Course
            </p>
            <p className="w-[642px] font-barlow text-[#6B6B6B]">
              The course was designed to provide participants with a
              comprehensive understanding of SEO strategies, techniques, and the
              best practices.
            </p>
            <div>
              <p className="text-[#6B6B6B] font-barlow text-sm capitalize">
                issued on Jul/02/2022
              </p>
            </div>
          </div>
          <CertificateCoursePromote
            course={'Seo Course'}
            image="3a3225cf5a0508f377effbd0acb03f5c.jpg"
          />
        </div>
        <div className="relative">
          <div className="flex flex-col gap-5">
            {/* <Image
              src="/static/images/Academy/gallery/Certificate.png"
              alt="academy"
              width={700}
              height={400}
            /> */}
            <Certificate />
          </div>
          <div className="absolute -right-8 -bottom-24 -z-10">
            <Image
              src="/static/images/Academy/gallery/academy.stroke.png"
              alt="academy"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
