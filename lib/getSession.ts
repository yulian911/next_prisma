import { getServerSession } from 'next-auth';
import { authOptions } from './authOptions';
import prisma from './prisma';

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });

    if (!currentUser) {
      return null;
    }
    const { password, ...currentUserWithoutPass } = currentUser;

    return {
      ...currentUserWithoutPass,
    };
  } catch (error: any) {
    return null;
  }
}
