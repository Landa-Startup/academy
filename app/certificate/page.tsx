import Banner from '@/components/common/Banner';
import CertificateAchievement from '@/components/academy/Certificate/CertificateAchievement';
import Footer from '@/components/layout/Footer';
import { Metadata } from 'next';

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
      <Footer />
    </div>
  );
}
