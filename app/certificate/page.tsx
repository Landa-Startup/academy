import Banner from "@/components/common/Banner";
import CertificateAchivement from "@/components/academy/Certificate/CertificateAchievement";
import Footer from "@/components/layout/Footer";

export default function Page() {
  return (
    <div>
      <Banner
        image="/static/images/Academy/certificate/lakdshfkj.jpg"
        title="Certificate"
      />
      <CertificateAchivement />
      <Footer/>
    </div>
  );
}
