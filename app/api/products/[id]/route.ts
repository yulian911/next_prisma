import { NextRequest, NextResponse } from 'next/server'
import jwt, { JwtPayload } from 'jsonwebtoken'

import prisma from '@/lib/prisma'
import getCurrentUser from '@/lib/getSession'

export const GET = async (req: Request, { params: { id } }: any) => {
  // const { searchParams } = new URL(req.url);
  // const id = searchParams.get('id');

  const accessToken = req.headers.get('authorization')?.split(' ')[1]
  // if (accessToken) {
  //   const decoded = verifyJwt(accessToken)
  //   console.log(decoded?.role)
  // }

  // if (!accessToken || !verifyJwt(accessToken)) {
  //   return new Response(
  //     JSON.stringify({
  //       error: 'unauthorized',
  //     }),
  //     {
  //       status: 401,
  //     },
  //   )
  // }
  // const secret_key = process.env.SECRET_KEY
  // const decoded =  jwt.verify(token, secret_key!)
  console.log(accessToken)

  try {
    const product = await prisma.product.findUnique({
      where: {
        id: Number(id),
      },
    })

    return NextResponse.json(product)
  } catch (error) {
    return NextResponse.json({ error: error })
  }
}

export const PATCH = async (req: NextRequest, { params }: any) => {
  const { title, brandId, price } = await req.json()

  const current = await getCurrentUser()

  if (current?.role === 'admin') {
    return new Response(
      JSON.stringify({
        error: 'unauthorized',
      }),
      {
        status: 401,
      },
    )
  }

  // const accessToken = req.headers.get('authorization');
  // const decoded = accessToken && verifyJwt(accessToken);

  // if (!accessToken) {
  //   return new Response(
  //     JSON.stringify({
  //       error: 'unauthorized',
  //     }),
  //     {
  //       status: 401,
  //     },
  //   );
  // }

  // if (decoded && decoded?.role === 'admin') {
  //   return new Response(
  //     JSON.stringify({
  //       error: 'Unauthorized need Admin',
  //     }),
  //     {
  //       status: 401,
  //     },
  //   );
  // }

  try {
    // Find the existing prompt by ID
    const existingPrompt = await prisma.product.findUnique({
      where: {
        id: Number(params.id),
      },
    })

    if (!existingPrompt) {
      return new Response('Prompt not found', { status: 404 })
    }

    // Update the prompt with new data
    await prisma.product.update({
      where: {
        id: Number(params.id),
      },
      data: {
        title,
        price,
        brandId,
      },
    })

    return new Response('Successfully updated the Prompts', { status: 200 })
  } catch (error) {
    return new Response('Error Updating Prompt', { status: 500 })
  }
}

export const DELETE = async (req: Request, { params }: any) => {
  console.log(params.id)
  try {
    const product = await prisma.product.delete({
      where: {
        id: Number(params.id),
      },
    })

    return NextResponse.json(product)
  } catch (error) {
    return NextResponse.json({ error: error })
  } finally {
    await prisma.$disconnect()
  }
}
