import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Certificate() {
  return (
    <div className="flex h-[520px] w-[700px] items-center justify-center border-[15px] border-[#FDD30A] bg-white font-barlow text-black">
      <div className="flex h-[470px] w-[650px] flex-col items-center justify-center border-[10px] border-[#80C555]">
        <div className="rounded-full border border-dashed border-black p-2">
          <div className="flex flex-col items-center justify-center rounded-full border border-black bg-[#F0F6ED] p-5">
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
        <span className="mt-6 text-2xl font-semibold text-black">
          Course Certificate
        </span>
        <div className="mt-5 flex flex-col items-center gap-2 font-medium">
          <span className="text-sm">This is to certify</span>
          <span className="font-pinyon text-5xl tracking-[2.4px]">
            Iman nasr
          </span>
          <p className="text-xs font-medium text-[#6B6B6B]">
            This is to certify that Iman nasr has successfully completed the SEO
            Course conducted by Landa Business Academy
          </p>
        </div>
        <div className="mt-12 flex w-full justify-between px-16">
          <div className="flex flex-col items-center justify-center">
            <span className="font-sacramento text-4xl text-[#80C555]">
              moradimehr.
            </span>
            <span className="text-xs font-semibold">Founder & Instructor</span>
          </div>
          <div className="flex flex-row items-center gap-1">
            <div className="flex flex-col gap-2 text-xs font-semibold">
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
