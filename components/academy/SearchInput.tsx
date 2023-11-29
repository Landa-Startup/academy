import React from 'react';
import List from '../icons/common/List';
import Magnifier from '../icons/common/Magnifier';

export default function SearchInput() {
  return (
    <div className="relative mx-3 my-11 flex h-[56px] items-center text-gray-400 focus-within:text-gray-600 md:mx-auto md:w-[722px]">
      <span className="absolute inset-y-0 left-2 flex items-center pl-2">
        <List />
      </span>

      <input
        className="input input-bordered w-full rounded-3xl px-10"
        placeholder="Search"
        type="search"
      />

      <span className="absolute inset-y-0 right-2 flex items-center pr-2">
        <Magnifier />
      </span>
    </div>
  );
}
