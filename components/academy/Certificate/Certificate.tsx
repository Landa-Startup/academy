import Image from 'next/image';
import React from 'react';

export default function Certificate({
  name,
  qrCode,
  issueDate
}: {
  name: string;
  qrCode: string;
  issueDate: string;
}) {
  return (
    <div className="flex h-[520px]  MD:w-[700px] items-center justify-center border-[15px] border-[#FDD30A] bg-white font-barlow text-black">
      <div className="flex h-[470px] w-full mx-2 py-3 flex-col items-center justify-center border-[10px] border-[#80C555]">
        <div className="rounded-full w-32 h-32 border border-dashed border-black p-2">
          <div className="flex w-full h-full flex-col items-center justify-center rounded-full border border-black bg-[#F0F6ED]">
            <Image
              className="object-contain"
              src="/static/images/Academy/Logo.svg"
              alt="Logo"
              width={50}
              height={50}
            />
            <span className="text-xs font-semibold text-black">
              Landa Academy
            </span>
          </div>
        </div>
        <span className="mt-6 text-2xl font-semibold text-black">
          Course Certificate
        </span>
        <div className="mt-5 flex flex-col items-center gap-5 font-medium">
          <span className="text-sm">This is to certify</span>
          <span className="font-pinyon text-5xl font-semibold capitalize tracking-[2.4px]">
            {name}
          </span>
          <p className="mx-10 text-center text-xs font-medium text-[#6B6B6B]">
            This is to certify that{' '}
            <span className="font-semibold capitalize">{name}</span> has
            successfully completed the SEO Course conducted by Landa Business
            Academy
          </p>
        </div>
        <div className="flex w-full justify-between px-3">
          <div className="flex flex-col items-center justify-center">
            <span className="font-sacramento text-4xl text-[#80C555]">
              moradimehr.
            </span>
            <span className="text-xs font-semibold">Founder & Instructor</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            {/* <div className="flex flex-col gap-2 text-xs font-semibold">
              <span>Verify Certificate:</span>
              <Link href={'/'} className="text-blue-500">
                https://academy.landaholding.com/verify/TY65JD7b
              </Link>
            </div> */}
            <Image alt="Qr code" src={qrCode} width={50} height={50} />{' '}
            <span className="bar font-barlow text-xs font-semibold">
              Issued on: {issueDate}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
