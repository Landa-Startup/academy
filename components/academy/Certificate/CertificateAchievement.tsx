import Certificate from '@/components/academy/Certificate/Certificate';
// import CertificateCoursePromote from '@/components/CertificateCoursePromote';
import Image from 'next/image';
export default function CertificateAchievement({
  name,
  courseTitle,
  issuedDate,
  // courseImage,
  // description,
  qrcode_image // slug
}: {
  name: string;
  courseTitle: string;
  issuedDate: string;
  courseImage: string;
  description: string;
  qrcode_image: string;
  slug: string;
}) {
  return (
    <div className="relative flex h-screen flex-col justify-around text-white">
      <div className="flex flex-col-reverse justify-between px-6">
        <div className="flex flex-col gap-5">
          {/* CERTIFICATE INFO */}
          <div className="flex flex-col justify-start gap-5 rounded-sm bg-[#fdd40a1a] p-10">
            <h2 className="font-gilda text-4xl text-[#FDD30A]">
              CERTIFICATE OF ACHIEVEMENT
            </h2>
            <p className="font-barlow text-lg text-[#6B6B6B]">AWARDED TO</p>
            <p className="font-barlow text-4xl capitalize text-[#3D5656]">
              {name}
            </p>

            <p className="text-[#6B6B6B]"> For Participating in</p>
            <p className="font-barlow text-4xl capitalize text-[#80C555]">
              {courseTitle}
            </p>
            <p className="w-[642px] font-barlow text-[#6B6B6B]">
              The course was designed to provide participants with a
              comprehensive understanding of SEO strategies, techniques, and the
              best practices.
            </p>
            <div>
              <p className="font-barlow text-sm capitalize text-[#6B6B6B]">
                issued on {issuedDate}
              </p>
            </div>
          </div>
          {/* CERTIFICATE INFO */}
          {/* <CertificateCoursePromote
            course={courseTitle}
            image={courseImage}
            description={description}
            slug={slug}
          /> */}
          {/* <div className="rounded-sm bg-[#fdd40a1a] p-6 font-gilda text-black">
            <span className="text-xl">Event sharing</span>
            <div className="my-6 flex gap-5">
              <IconInstagram />
              <IconWhatApp />
              <IconLinkedin />
            </div>
            <div className="flex gap-2">
              <input
                className="h-[50px] w-[350px] border border-[#E5E5E5] bg-[#FAFAFA] p-5"
                type="text"
                placeholder="HPP//ddkksso.ddkke.aalhb 23wwe..."
              />
              <button className="h-[50px] w-[118px] self-end rounded-sm border border-black text-xs">
                Copy the link
              </button>
            </div>
            <p className='ml-2 mt-2'>
              Send this link to someone to share your Certificate with them.
            </p>
          </div> */}
        </div>
        <div className="relative">
          <div className="flex flex-col gap-5">
            {/* <Image
              src="/static/images/Academy/gallery/Certificate.png"
              alt="academy"
              width={700}
              height={400}
            /> */}
            <Certificate
              name={name}
              qrCode={qrcode_image}
              issueDate={issuedDate}
            />
          </div>
          <div className="absolute -bottom-24 -right-8 -z-10">
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
