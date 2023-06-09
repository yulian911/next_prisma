'use client'

import React, { SyntheticEvent, useState } from 'react'
import type { Brand } from '@prisma/client'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const AddProduct = ({ brands }: { brands: Brand[] }) => {
  const [product, setProduct] = useState({
    title: '',
    price: '',
    brand: '',
  })
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleModal = () => {
    setIsOpen(prev => !prev)
  }
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    await axios.post('/api/products', {
      title: product.title,
      price: Number(product.price),
      brandId: Number(product.brand),
    })
    setProduct({
      title: '',
      price: '',
      brand: '',
    })
    router.refresh()
    setIsOpen(false)
  }
  return (
    <div>
      <button className="btn" onClick={handleModal}>
        Add New
      </button>
      <div className={isOpen ? 'modal modal-open' : 'modal'}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add New Product</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control w-full">
              <label htmlFor="" className="label font-bold">
                Product Name
              </label>
              <input
                type="text"
                value={product.title}
                onChange={e => setProduct({ ...product, title: e.target.value })}
                className="input input-bordered"
                placeholder="Product Name"
              />
            </div>
            <div className="form-control w-full">
              <label htmlFor="" className="label font-bold">
                Price
              </label>
              <input
                type="text"
                value={product.price}
                onChange={e => setProduct({ ...product, price: e.target.value })}
                className="input input-bordered"
                placeholder=" Price"
              />
            </div>
            <div className="form-control w-full">
              <label htmlFor="" className="label font-bold">
                Brand
              </label>
              <select
                className="select select-bordered"
                value={product.brand}
                onChange={e => setProduct({ ...product, brand: e.target.value })}>
                <option value="" disabled>
                  Select a Brand
                </option>
                {brands?.map((brand: any) => (
                  <option key={brand.id} value={brand.id}>
                    {brand.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="modal-action">
              <button className="btn" type="button" onClick={handleModal}>
                Close
              </button>
              <button className="btn btn-primary" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddProduct
