import React from 'react';
import { getSession } from 'next-auth/react';

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  console.log(session);
  if (!session || session.user.role !== 'user') {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {}, // Przekazanie pustych propsów do komponentu
  };
}
const User = async () => {
  // const currentUser = await getCurrentUser();

  // if (currentUser?.role !== 'user') {
  //   // Użytkownik nie ma uprawnień admina
  //   return {
  //     redirect: {
  //       destination: '/',
  //       // permanent: false,
  //     },
  //   };
  // }
  return <div>User</div>;
};

export default User;
