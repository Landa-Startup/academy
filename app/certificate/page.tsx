import Banner from '@/components/common/Banner';
import CertificateAchievement from '@/components/academy/Certificate/CertificateAchievement';
import Footer from '@/components/layout/Footer';

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
