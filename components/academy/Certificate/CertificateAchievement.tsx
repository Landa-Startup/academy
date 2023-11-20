import Image from "next/image";
export default function CertificateAchivement() {
  return (
    <div className="flex flex-col text-white h-screen snap-start">
      <div className="flex flex-col md:flex-row-reverse pt-16">
           <Image
            src="/static/images/Academy/gallery/academy.stroke.png"
            alt="academy"
            width={500}
            height={500}
          />
      <div className="flex flex-col justify-start w-[1200px]">
        <h2 className="font-gilda text-[#FDD30A] mt-12 ml-12 text-5xl">CERTIFICATE OF ACHIEVEMNENT</h2>
        <p className="text-xl mt-12 ml-12 text-[#6B6B6B] font-barlow">AWARDED TO</p>
        <p className="font-normal pt-12 ml-12 text-[#3D5656] font-normal text-4xl">MOHAMAD AMIN ASGARIAN</p>
        <p className="text-[#6B6B6B] pt-12 text-xl ml-12">
        <p className="text-[#6B6B6B]"> For Participating in</p>
        <p className="text-[#80C555] pt-12 text-5xl font-barlow capitalize">SEO Course</p>
        <p className="pt-12 font-barlow text-[#6B6B6B] w-[642px]">The course was designed to provide participants with a comprehensive understanding of SEO strategies, techniques, and the best practices.</p>
 </p>
<div className="pt-12 pl-12">
<Image
   src="/static/images/Academy/gallery/rectangle 3032.png"
   alt="academy"
   width={250}
   height={500}
/>

</div>
</div>
        </div>
    </div>
  );
}
