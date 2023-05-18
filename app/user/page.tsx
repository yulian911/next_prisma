import getCurrentUser from '@/lib/getSession';
import { redirect } from 'next/navigation';
import React from 'react';

const User = async () => {
  const currentUser = await getCurrentUser();

  if (currentUser?.role !== 'user') {
    // Użytkownik nie ma uprawnień admina
    redirect('/');
  }
  return <div>User</div>;
};

export default User;
