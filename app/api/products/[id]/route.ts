import { NextResponse } from 'next/server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const GET = async (req: Request, { params: { id } }: any) => {
  // const { searchParams } = new URL(req.url);
  // const id = searchParams.get('id');
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({ error: error });
  } finally {
    await prisma.$disconnect();
  }
};

export const PATCH = async (req: Request, { params }: any) => {
  const { title, brandId, price } = await req.json();

  try {
    // Find the existing prompt by ID
    const existingPrompt = await prisma.product.findUnique({
      where: {
        id: Number(params.id),
      },
    });

    if (!existingPrompt) {
      return new Response('Prompt not found', { status: 404 });
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
    });

    return new Response('Successfully updated the Prompts', { status: 200 });
  } catch (error) {
    return new Response('Error Updating Prompt', { status: 500 });
  }
};

export const DELETE = async (req: Request, { params }: any) => {
  console.log(params.id);
  try {
    const product = await prisma.product.delete({
      where: {
        id: Number(params.id),
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({ error: error });
  } finally {
    await prisma.$disconnect();
  }
};
