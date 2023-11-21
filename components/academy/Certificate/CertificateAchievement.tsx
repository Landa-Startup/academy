import Image from "next/image";
export default function CertificateAchivement() {
  return (
    <div className="flex h-screen snap-start flex-col text-white">
      <div className="flex flex-col pt-16 md:flex-row-reverse">
           <Image
            src="/static/images/Academy/gallery/academy.stroke.png"
            alt="academy"
            width={500}
            height={500}
          />
      <div className="flex w-[1200px] flex-col justify-start">
        <h2 className="ml-12 mt-12 font-gilda text-5xl text-[#FDD30A]">CERTIFICATE OF ACHIEVEMNENT</h2>
        <p className="ml-12 mt-12 font-barlow text-xl text-[#6B6B6B]">AWARDED TO</p>
        <p className="ml-12 pt-12 text-4xl font-normal text-[#3D5656]">MOHAMAD AMIN ASGARIAN</p>
        <p className="ml-12 pt-12 text-xl text-[#6B6B6B]">
        <p className="text-[#6B6B6B]"> For Participating in</p>
        <p className="pt-12 font-barlow text-5xl capitalize text-[#80C555]">SEO Course</p>
        <p className="w-[642px] pt-12 font-barlow text-[#6B6B6B]">The course was designed to provide participants with a comprehensive understanding of SEO strategies, techniques, and the best practices.</p>
 </p>
<div className="pl-12 pt-12">
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
