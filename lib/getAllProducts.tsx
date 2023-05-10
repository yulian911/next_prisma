export default async function getAllProducts() {
  const res = await fetch('http://localhost:3000/api/products', {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error(`Error fetching`);
  }
  return res.json();
}
