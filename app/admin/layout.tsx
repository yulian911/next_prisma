import Navbar from '@/components/Navbar';
import React from 'react';

export const metadata = {
  title: 'Admin Panel',
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Navbar />
      {children}
    </div>
  );
};

export default AdminLayout;
