import Image from "next/image";
export default function CertificateAchivement() {
  return (
    <div className="flex flex-col text-white h-[890px]">
      <div className="flex flex-col md:flex-row-reverse pt-16">
        <div className="pt-20 sm:block hidden">
           <Image
            src="/static/images/Academy/gallery/academy.stroke.png"
            alt="academy"
            width={500}
            height={500}
          />
          </div>
      <div className="flex flex-col justify-start w-[1200px]">
        <h2 className="font-gilda text-[#FDD30A] mt-2 ml-12 text-5xl">CERTIFICATE OF ACHIEVEMNENT</h2>
        <p className="text-xl mt-12 ml-12 text-[#6B6B6B] font-barlow">AWARDED TO</p>
        <p className="pt-12 ml-12 text-[#3D5656] font-barlow capitalize text-5xl">MOHAMAD AMIN ASGARIAN</p>
        <p className="text-[#6B6B6B] pt-12 text-xl ml-12">
        <p className="text-[#6B6B6B]"> For Participating in</p>
        <p className="pt-12 font-barlow text-5xl capitalize text-[#80C555]">SEO Course</p>
        <p className="w-[642px] pt-12 font-barlow text-[#6B6B6B]">The course was designed to provide participants with a comprehensive understanding of SEO strategies, techniques, and the best practices.</p>
 </p>
<div className="pl-12 pt-12">
<Image
   src="/static/images/Academy/gallery/Certificate.png"
   alt="academy"
   width={250}
   height={500}
/>
<div>
  <p className="text-black pt-4 font-Roboto">issued on Jul/02/2022</p>
</div>


</div>
</div>
        </div>
    </div>
  );
}
