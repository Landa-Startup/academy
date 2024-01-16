import Image from 'next/image';
import React from 'react';

export default function CertificateNew() {
    return (
        <div
            className="relative h-auto md:h-[100vh] text-xl flex md:items-center md:justify-around bg-[url('/static/images/Academy/certificate/certificate1.jpg')] bg-[length:100%_100%] bg-no-repeat">
            <div className="flex h-full flex-col md:h-[30rem] md:justify-between my-10 md:ms-48 ps-5">
                <div className="flex md:h-[18rem] flex-col justify-start md:justify-between md:w-[30rem] gap-y-2">
                    <p className="text-sm md:text-lg">Aug 30.2023</p>
                    <p className="font-gilda text-md font-semibold md:text-3xl">
                        Ali Khavari
                    </p>
                    <p className="text-sm md:text-2xl">has successfully completed </p>
                    <p className="font-gilda text-md font-semibold md:text-2xl">
                        SEO Course
                    </p>
                    <p className="text-sm md:text-2xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                        minus, corporis facilis omnis quaerat aliquam cum commodi
                        perferendis.
                    </p>
                </div>
                <div className="w-1/2 md:w-full">
                    <Image
                        className="mt-5"
                        loading="lazy"
                        src={`/static/images/Academy/certificate/text.png`}
                        alt="flag"
                        width={200}
                        height={100}
                    />
                </div>
            </div>
            <div className="flex flex-col items-center justify-between ">
                <div
                    className="relative top-0 flex flex-col items-center justify-around pb-4 h-[130px] w-[70px] md:h-96 md:w-64 p-1 bg-[url('/static/images/Academy/certificate/flag.png')] bg-cover md:bg-contain bg-no-repeat bg-center">
                    <Image
                        loading="lazy"
                        src={`/static/images/Academy/certificate/QR_Code_Example.svg`}
                        alt="flag"
                        width={150}
                        height={150}
                    />
                    <Image
                        loading="lazy"
                        src={`/static/images/Academy/certificate/TEXT2.png`}
                        alt="flag"
                        width={150}
                        height={100}
                    />
                </div>
                <div>
                    <Image
                        loading="lazy"
                        src={`/static/images/Academy/Logo.svg`}
                        alt="Landa"
                        width={400}
                        height={400}
                    />
                </div>
            </div>
        </div>
    );
}
