import Navbar from '@/components/Navbar';
import React from 'react';

export const metadata = {
  title: 'User',
};

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Navbar />
      {children}
    </div>
  );
};

export default UserLayout;
