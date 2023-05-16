// 'use client';
import { authOptions } from '@/lib/authOptions';
import getAllProducts from '@/lib/getAllProducts';
import { getServerSession } from 'next-auth';

import { getSession, useSession } from 'next-auth/react';

export default async function Home() {
  async function getSession() {
    return await getServerSession(authOptions);
  }

  const session = await getSession();
  console.log(session);
  // const products = await getAllProducts();
  // const session = getServerSession(authOptions)

  return <main></main>;
}

// export async function generateStaticParams() {
//   const products = await getAllProducts();
//   return products.map((product: any) => ({ id: product.id.toString() }));
// }
