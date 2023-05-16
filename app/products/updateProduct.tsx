'use client';

import React, { SyntheticEvent, useEffect, useState } from 'react';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { $authHost } from '@/lib/instance';

const UpdateProduct = ({ brands, products }: any) => {
  const [product, setProduct] = useState({
    title: products.title,
    price: products.price,
    brand: products.brandId,
  });
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();
  //   const getProductDetails = async () => {
  //     const data = await axios.get(`/api/products/${id}`)
  //     console.log(data)
  //     setProduct({
  //       title: data?.title,
  //       price: data?.price,
  //       brand: data?.brandId,
  //     })
  //   }

  // console.log(session?.user.accessToken)

  const handleModal = () => {
    setIsOpen(prev => !prev);
  };
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    // await $authHost.patch(`/api/products/${products.id}`, {
    //   title: product.title,
    //   price: Number(product.price),
    //   brandId: Number(product.brand),
    // });
    await axios.patch(
      `/api/products/${products.id}`,
      {
        title: product.title,
        price: Number(product.price),
        brandId: Number(product.brand),
      },
      // {
      //   headers: {
      //     Authorization: `${session?.user.accessToken}`,
      //   },
      // },
    );

    router.refresh();
    setIsOpen(false);
  };
  return (
    <div>
      <button className="btn" onClick={handleModal}>
        Update
      </button>
      <div className={isOpen ? 'modal modal-open' : 'modal'}>
        <div className="modal-box">
          <h3 className="text-lg font-bold">Update Product</h3>
          <form onSubmit={handleSubmit}>
            <div className="w-full form-control">
              <label htmlFor="" className="font-bold label">
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
            <div className="w-full form-control">
              <label htmlFor="" className="font-bold label">
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
            <div className="w-full form-control">
              <label htmlFor="" className="font-bold label">
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
  );
};

export default UpdateProduct;
