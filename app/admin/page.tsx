import getCurrentUser from '@/lib/getSession';
import { redirect } from 'next/navigation';
import React from 'react';

const AdminPage = async () => {
  const currentUser = await getCurrentUser();
  if (currentUser?.role !== 'user') {
    // Użytkownik nie ma uprawnień admina
    redirect('/');
  }
  return <div>route</div>;
};

export default AdminPage;
