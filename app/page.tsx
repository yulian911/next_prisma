// 'use client';
import { authOptions } from '@/lib/authOptions';
import getAllProducts from '@/lib/getAllProducts';
import getCurrentUser from '@/lib/getSession';
import { getServerSession } from 'next-auth';

import { getSession, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default async function Home() {
  // const products = await getAllProducts();
  const session = await getCurrentUser();

  redirect(`/${session?.role}`);

  return <main>XD</main>;
}

// export async function generateStaticParams() {
//   const products = await getAllProducts();
//   return products.map((product: any) => ({ id: product.id.toString() }));
// }
