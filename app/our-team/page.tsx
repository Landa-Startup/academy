import Banner from '@/components/common/Banner';
import { Metadata } from 'next';
import FooterSecondary from '@/components/layout/FooterSecondary';
import TeamPersons from '@/components/OurTeam/TeamPersons';

export const metadata: Metadata = {
  title: 'Landa Holding | Our Team',
  description:
    'Meet the dedicated and talented individuals who make up the Landa Holding team. Learn about their expertise, passion, and commitment to excellence. Get to know the driving force behind our success.'
};

export default function TeamPage() {
  return (
    <div>
      <Banner
        image="/static/images/Academy/Banner/OurTeam.jpg"
        title="Our Team"
      />
      <TeamPersons />
      <FooterSecondary />
    </div>
  );
}
