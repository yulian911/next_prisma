import getAllProducts from '@/lib/getAllProducts';
import Image from 'next/image';

export default async function Home() {
  // const products = await getAllProducts();

  return <main></main>;
}

// export async function generateStaticParams() {
//   const products = await getAllProducts();
//   return products.map((product: any) => ({ id: product.id.toString() }));
// }
