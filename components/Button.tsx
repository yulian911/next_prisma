'use client'
import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const Button = ({ id }: any) => {
  const router = useRouter()
  const handleDelete = async (id: number) => {
    const hasConfirmed = confirm('Are you sure you want to delete this product ?')
    if (hasConfirmed) {
      try {
        await axios.delete(`/api/products/${id}`)
        router.refresh()
      } catch (error) {
        console.log(error)
      }
    }
  }
  return (
    <button className="btn" onClick={() => handleDelete(id)}>
      Delete
    </button>
  )
}

export default Button
