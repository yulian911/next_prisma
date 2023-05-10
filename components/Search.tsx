'use client';
import { useRouter } from 'next/navigation';
import React, { FormEvent, SyntheticEvent, useState } from 'react';

const Search = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch('');
    router.push(`/${search}/`);
  };
  return (
    <form onSubmit={handleSubmit} className="flex justify-center w-50 md:justify-between">
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        type="text"
        className="p-2 text-xl bg-white w-80 rounded-xl"
      />
      <button type="submit" className="p-2 ml-2 text-xl font-bold rounded-xl bg-slate-300">
        🚀
      </button>
    </form>
  );
};

export default Search;
