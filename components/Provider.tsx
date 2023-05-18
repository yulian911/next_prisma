'use client';

import React, { ReactNode } from 'react';
import { SessionProvider, useSession } from 'next-auth/react';
interface Props {
  children: ReactNode;
}

function Auth({ children }: Props) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true });
  console.log(status);

  // if (status === 'loading') {
  //   return <div>Loading...</div>;
  // }

  return children;
}

const Providers = ({ children }: Props) => {
  return (
    <SessionProvider>
      {/* @ts-ignore */}
      {/* <Auth> */}
      {children}
      {/* </Auth> */}
    </SessionProvider>
  );
};

export default Providers;
