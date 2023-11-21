import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Certificate() {
  return (
    <div className="w-[700px] h-[520px] border-[15px] border-[#FDD30A] flex justify-center items-center font-barlow text-black bg-white">
      <div className="border-[10px] w-[650px] h-[470px] border-[#80C555] flex flex-col justify-center items-center">
        <div className="border border-dashed border-black p-2 rounded-full">
          <div className="bg-[#F0F6ED] p-5 rounded-full border border-black flex flex-col justify-center items-center">
            <Image
              className="object-contain"
              src="/static/images/Academy/Logo.svg"
              alt="Logo"
              width={50}
              height={50}
            />
            <span className="text-xs font-semibold text-black">Landa Academy</span>
          </div>
        </div>
        <span className="text-black text-2xl font-semibold mt-6">
          Course Certificate
        </span>
        <div className="flex flex-col gap-2 items-center mt-5 font-medium">
          <span className="text-sm">This is to certify</span>
          <span className="font-pinyon text-5xl tracking-[2.4px]">
            Iman nasr
          </span>
          <p className="text-xs font-medium text-[#6B6B6B]">
            This is to certify that Iman nasr has successfully completed the SEO
            Course conducted by Landa Business Academy
          </p>
        </div>
        <div className="flex justify-between w-full px-16 mt-12">
          <div className="flex flex-col justify-center items-center">
            <span className="text-4xl font-sacramento text-[#80C555]">
              moradimehr.
            </span>
            <span className="text-xs font-semibold">Founder & Instructor</span>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <div className="text-xs font-semibold flex flex-col gap-2">
              <span>Verify Certificate:</span>
              <Link href={'/'} className="text-blue-500">
                https://academy.landaholding.com/verify/TY65JD7b
              </Link>
            </div>
            <Image
              alt="Qr code"
              src={'/static/images/Academy/Rectangle 2981.png'}
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
