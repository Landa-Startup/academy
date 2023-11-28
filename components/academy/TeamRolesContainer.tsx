'use client';
import React, { useState } from 'react';

export default function TeamRolesContainer({
  roles,
  onRoleSelect
}: {
  roles: string[];
  onRoleSelect: (role: string) => void;
}) {
  const [selectedRole, setSelectedRole] = useState<string | null>('All');
  function handleRoleClick(role: string) {
    console.log("role:", role)
    onRoleSelect(role);
    setSelectedRole(role);
  }
  return (
    <div className="flex flex-wrap justify-center gap-1 bg-slate-50 pb-5 pt-10">
      {roles.map((role, index) => (
        <button
          onClick={() => handleRoleClick(role)}
          key={index}
          className={`btn btn-outline rounded-sm border-[#222] capitalize ${
            selectedRole === role ? 'bg-[#222] text-white' : 'text-[#222]'
          }`}
        >
          {role}
        </button>
      ))}
    </div>
  );
}
