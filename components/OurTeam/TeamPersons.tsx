'use client';
import { useState, useEffect } from 'react';
import TeamRolesContainer from './TeamRolesContainer';
import PersonalTab from './PersonalTab';
import { persons } from '../Constant/constant';

export default function TeamPersons() {
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
  }
  useEffect(() => {
    console.log('Selected Role:', selectedRole);
    if (selectedRole === 'All') {
      setFilteredPersons(persons);
    } else {
      const filteredPersons = persons.filter(
        (person) =>
          person.category?.toLowerCase().includes(selectedRole.toLowerCase())
      );
      console.log(filteredPersons);
      setFilteredPersons(filteredPersons);
    }
  }, [selectedRole]);
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
