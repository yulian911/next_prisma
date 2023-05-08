import React from 'react'
import { PrismaClient } from '@prisma/client'
import AddProduct from './addProduct'
import Button from '@/components/Button'
import UpdateProduct from './updateProduct'

const prisma = new PrismaClient()

const getProducts = async () => {
  const res = await prisma.product.findMany({
    select: {
      id: true,
      title: true,
      price: true,
      brandId: true,
      Brand: true,
    },
  })
  return res
}

const getBrands = async () => {
  const res = await prisma.brand.findMany()
  return res
}

const Products = async () => {
  const [product, brands] = await Promise.all([getProducts(), getBrands()])

  return (
    <div>
      {/* table>(thead>tr>th*5)+(tbody>tr>th*6) */}
      <div className="mb-2">
        <AddProduct brands={brands} />
      </div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Brand</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {product.map((product: any, i: number) => (
            <tr key={i + 1}>
              <th>{product.id}</th>
              <th>{product.title}</th>
              <th>{product.price}</th>
              <th>{product.Brand.name}</th>
              <th className="flex justify-center gap-2">
                <Button id={product.id} />
                <UpdateProduct products={product} brands={brands} />
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Products
