'use client';
import Banner from '@/components/common/Banner';
// import CertificateAchievement from '@/components/academy/Certificate/CertificateAchievement';
// import { Metadata } from 'next';
import FooterSecondary from '@/components/layout/FooterSecondary';
// import { usePathname } from 'next/navigation';
// import { useEffect } from 'react';
import CertificateAchievementNew from '@/components/CertificateAchievementNew';

// interface Certificate {
//   user: { first_name: string; last_name: string };
//   course: {
//     title: string;
//     thumbnail: string;
//     description: string;
//     slug: string;
//   };
//   issue_date: string;
//   certificate: string;
//   courseImage: string;
//   qrcode_image: string;
// }

// export const metadata: Metadata = {
//   title: 'Landa Academy | Certificate',
//   description: ''
// };

export default function Page() {
  // const pathname = usePathname();
  // const slug = pathname?.replace('/certificate/', '');
  // const [certificate, setCertificate] = useState<Certificate>({
  //   user: { first_name: '', last_name: '' },
  //   course: { title: '', thumbnail: '', description: '', slug: '' },
  //   issue_date: '',
  //   certificate: '',
  //   courseImage: '',
  //   qrcode_image: ''
  // });
  // useEffect(() => {
  //   async function fetchTags() {
  //     const response = await fetch(
  //       `${process.env.NEXT_PUBLIC_DJANGO_HOST_URL}certifications/certificate/${slug}?format=json`
  //     );
  //     const data = await response.json();
  //     console.log(data.certificate);
  //     // setCertificate(data);
  //   }
  //   fetchTags();
  // }, [slug]);
  return (
    <div>
      <Banner
        image="/static/images/Academy/seo-course.png"
        title="Certificate"
      />
      {/* <CertificateAchievement
        name={certificate.user.first_name + ' ' + certificate.user.last_name}
        courseTitle={certificate.course.title}
        issuedDate={certificate.issue_date.replace(/-/g, '/')}
        courseImage={certificate.course.thumbnail}
        description={certificate.course.description}
        qrcode_image={certificate.qrcode_image}
        slug={certificate.course.slug}
      /> */}
      <CertificateAchievementNew />
      <FooterSecondary />
    </div>
  );
}
