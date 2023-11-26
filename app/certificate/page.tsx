import Banner from '@/components/common/Banner';
import CertificateAchievement from '@/components/academy/Certificate/CertificateAchievement';
import { Metadata } from 'next';
import FooterSecondary from '@/components/layout/FooterSecondary';

export const metadata: Metadata = {
  title: 'Landa Academy | Certificate',
  description: ''
};

export default function Page() {
  return (
    <div>
      <Banner
        image="/static/images/Academy/seo-course.png"
        title="SEO CERTIFICATE"
      />
      <CertificateAchievement />
      <FooterSecondary />
    </div>
  );
}
