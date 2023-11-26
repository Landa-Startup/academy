'use client';
import React, { useState } from 'react';
import TeamRolesContainer from './academy/TeamRolesContainer';
import PersonalTab from './PersonalTab';

export default function TeamPersons() {
  const persons = [
    {
      image: '/static/images/Academy/our-team/Personals/a1.png',
      position: 'CEO',
      name: 'Dr.Rasoul Moradimehr',
      linkedIn: 'https://www.linkedin.com/in/rasoul-moradi-mehr/',
      category: 'managers'
    },
    {
      image: '/static/images/Academy/our-team/Personals/a2.png',
      position: 'COTB',
      name: 'Dr.Hadi Hasanpour',
      linkedIn:
        'https://www.linkedin.com/in/hadi-hasanpour?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      category: 'managers'
    },
    {
      image: '/static/images/Academy/our-team/Personals/a10.png',
      position: 'Manager',
      name: 'Mehrnoosh Heibati',
      linkedIn: 'https://www.linkedin.com/in/mehrnoosh-heibati-62b117223/',
      category: 'managers'
    },
    {
      image: '/static/images/Academy/our-team/Personals/a11.png',
      position: 'Case Manager',
      name: 'Mahsa Esmaeili',
      linkedIn: 'https://www.linkedin.com/in/mahsa-esmaili',
      category: 'managers'
    },
    {
      image: '/static/images/Academy/our-team/Personals/a3.png',
      position: 'Secretary',
      name: 'Lida Parvizi',
      linkedIn: 'https://www.linkedin.com/in/lida-parvizi-ab7b8721a/',
      category: 'secretary'
    },
    {
      image: '/static/images/Academy/our-team/Personals/a4.png',
      position: 'Public Relations Officer',
      name: 'Kholoud Hariri',
      linkedIn: 'linkedin.com/in/kholoud-hariri-b83b96222',
      category: 'public relations officer'
    },
    {
      image: '/static/images/Academy/our-team/Personals/a35.jpg',
      position: 'Director of Public Relations',
      name: 'Arash Aryanik',
      linkedIn: 'https://www.linkedin.com/in/arash-aryanik-58b97885/',
      category: 'public relations officer'
    },
    {
      image: '/static/images/Academy/our-team/Personals/a5.png',
      position: 'Accountant',
      name: 'Ali Soleimani',
      linkedIn: 'https://www.linkedin.com/in/ali-soleymani-b761b6223/',
      category: 'accountant'
    },
    {
      image: '/static/images/Academy/our-team/Personals/a6.png',
      position: 'CTO',
      name: 'Iman Nasr',
      linkedIn: 'https://www.linkedin.com/in/iman-nasr-esfahani',
      category: 'mentors'
    },
    {
      image: '/static/images/Academy/our-team/Personals/a7.png',
      position: 'Full stack',
      name: 'Sajjad Momeni',
      linkedIn: 'https://www.linkedin.com/in/sajjad-momeni-17ab4778/',
      category: 'mentors'
    },
    {
      image: '/static/images/Academy/our-team/Personals/a8.png',
      position: 'Full Stack',
      name: 'Amin Asgarian',
      linkedIn: 'https://www.linkedin.com/in/amin-asgarian/',
      category: 'programmers'
    },
    {
      image: '/static/images/Academy/our-team/Personals/a.82.png',
      position: 'Digital Marketer',
      name: 'Ehsan Aliakbari',
      linkedIn: 'https://www.linkedin.com/in/ehsan-aliakbari',
      category: 'digital marketer'
    },
    {
      image: '/static/images/Academy/our-team/Personals/a13.png',
      position: 'UX/UI Designer',
      name: 'Ariana Shafie',
      linkedIn:
        'https://www.linkedin.com/in/ariana-shafie-2b38ab190/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      category: 'designers'
    },
    {
      image: '/static/images/Academy/our-team/Personals/a14.png',
      position: 'Product Designer',
      name: 'Arshia Nasiri',
      linkedIn: 'https://www.linkedin.com/in/marshian03',
      category: 'product designer'
    },

    {
      image: '/static/images/Academy/our-team/Personals/a15.png',
      position: 'Junior Back-end',
      name: 'Fatemeh Safi',
      linkedIn: '',
      category: 'programmers'
    },
    {
      image: '/static/images/Academy/our-team/Personals/a16.png',
      position: 'Full Stack',
      name: 'Sobhan Emami',
      linkedIn: 'https://www.linkedin.com/in/sobhan-emami/',
      category: 'programmers'
    },
    {
      image: '/static/images/Academy/our-team/Personals/a17.png',
      position: 'Front-end',
      name: 'Fahimeh Sajjadi',
      linkedIn:
        'https://www.linkedin.com/in/fahimeh-sajadi-50a399202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      category: 'programmers'
    },
    {
      image: '/static/images/Academy/our-team/Personals/a18.png',
      position: 'Front-end',
      name: 'Saman Karchegani',
      linkedIn: 'https://www.linkedin.com/in/saman-kchn',
      category: 'programmers'
    },

    {
      image: '/static/images/Academy/our-team/Personals/a19.png',
      position: 'Front-end',
      name: 'Mohsen Kiani',
      linkedIn:
        'https://www.linkedin.com/in/mohsen-kiani-85920a267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      category: 'programmers'
    },
    {
      image: '/static/images/Academy/our-team/Personals/a20.png',
      position: 'Application Developer',
      name: 'Ali Khavari',
      linkedIn:
        'https://www.linkedin.com/in/ali-khavari-10b737191?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      category: 'programmers'
    },
    {
      image: '/static/images/Academy/our-team/Personals/a21.png',
      position: 'Graphic Designer',
      name: 'Hoda Mahdi',
      linkedIn:
        'https://www.linkedin.com/in/hoda-mahdi-896855269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      category: 'designers'
    },
    {
      image: '/static/images/Academy/our-team/Personals/a22.png',
      position: 'Graphic Designer',
      name: 'Aynaz Reisi',
      linkedIn: '',
      category: 'designers'
    },

    {
      image: '/static/images/Academy/our-team/Personals/a23.png',
      position: 'Content Creator',
      name: 'Mahtab Hafizi',
      linkedIn: '',
      category: 'content creators'
    },
    {
      image: '/static/images/Academy/our-team/Personals/a24.png',
      position: 'UI designer',
      name: 'Saba Mokhtari',
      linkedIn: '',
      category: 'programmers'
    },
    {
      image: '/static/images/Academy/our-team/Personals/a25.png',
      position: 'Content Creator',
      name: 'Tiam Safarian',
      linkedIn: 'https://www.linkedin.com/in/tiam-safarian-616933230/',
      category: 'content creators'
    },
    {
      image: '/static/images/Academy/our-team/Personals/a26.png',
      position: 'Word Press Developer',
      name: 'Roham Arabloo',
      linkedIn: '',
      category: 'programmers'
    },

    {
      image: '/static/images/Academy/our-team/Personals/a27.png',
      position: 'Full Stack',
      name: 'Meraj Bighamian',
      linkedIn: 'https://www.linkedin.com/in/meraj-bighamian-7034581a3',
      category: 'programmers'
    },
    {
      image: '/static/images/Academy/our-team/Personals/a28.png',
      position: 'Front-end',
      name: 'Mahdi Salmanzadeh',
      linkedIn: 'https://www.linkedin.com/in/mehdisa/',
      category: 'programmers'
    },
    {
      image: '/static/images/Academy/our-team/Personals/a29.png',
      position: 'Front-end',
      name: 'Mahrokh Lotfi',
      linkedIn: '',
      category: 'programmers'
    },
    {
      image: '/static/images/Academy/our-team/Personals/a30.png',
      position: 'Front-end',
      name: 'Ramtin Foroozani',
      linkedIn: 'https://www.linkedin.com/in/ramtin-foroozani-04b390272/',
      category: 'programmers'
    },

    {
      image: '/static/images/Academy/our-team/Personals/a31.png',
      position: 'Front-end',
      name: 'Barad Dehghani',
      linkedIn: 'linkedin.com/in/barad-dehghani-26b264296',
      category: 'programmers'
    },
    {
      image: '/static/images/Academy/our-team/Personals/a32.png',
      position: 'Front-end',
      name: 'Matin Janghorbani',
      linkedIn: 'http://www.linkedin.com/in/matin-nejatbakhsh-4567a9279',
      category: 'programmers'
    },
    {
      image: '/static/images/Academy/our-team/Personals/a33.png',
      position: 'Public Relations Officer',
      name: 'Gelareh Bahrami',
      linkedIn:
        'https://www.linkedin.com/in/gelareh-bahrami-baba59185?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      category: 'public relations officer'
    },
    {
      image: '/static/images/Academy/our-team/Personals/a34.png',
      position: 'Graphic Designer',
      name: 'Faezeh Khani',
      linkedIn: '',
      category: 'designers'
    }
  ];
  const roles = [
    'All',
    'Managers',
    'Mentors',
    'Programmers',
    'Product Designer',
    'Designers',
    'Content Creators',
    'Accountant',
    'Public Relations',
    'Digital Marketer',
    'Secretary'
  ];

  const [selectedRole, setSelectedRole] = useState<string>('All');
  const [filteredPersons, setFilteredPersons] = useState(persons);

  function handleRoleSelect(role: string) {
    setSelectedRole(role);
    if (selectedRole === 'All') {
      setFilteredPersons(persons);
    } else {
      const filteredPersons = persons.filter(
        (person) =>
          person.category?.toLowerCase().includes(selectedRole.toLowerCase())
      );
      setFilteredPersons(filteredPersons);
    }
  }
  return (
    <div>
      <TeamRolesContainer onRoleSelect={handleRoleSelect} roles={roles} />
      <div className="grid grid-cols-1 justify-items-center gap-5 bg-[#FAFAFA] py-12 md:grid-cols-4 md:px-36">
        {filteredPersons.map((person, index) => (
          <PersonalTab
            key={index}
            image={person.image}
            position={person.position}
            name={person.name}
            linkedIn={person.linkedIn}
          />
        ))}
      </div>
    </div>
  );
}
