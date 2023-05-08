import { NextResponse } from 'next/server'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const POST = async (req: Request) => {
  const { title, brandId, price } = await req.json()
  try {
    const product = await prisma.product.create({
      data: {
        title,
        price,
        brandId,
      },
    })

    return NextResponse.json(product)
  } catch (error) {
    return NextResponse.json({ error: error })
  } finally {
    await prisma.$disconnect()
  }
}
