import NextAuth from 'next-auth';
import 'next-auth/jwt';

// declare module 'next-auth/jwt' {
//   interface JWT {
//     user: {
//       id: number
//       name: string
//       email: string
//       role: string
//       accessToken: string
//     }
//   }
// }

declare module 'next-auth' {
  interface Session {
    user: {
      id: number;
      name: string;
      email: string;
      role: string;
      accessToken: string;
      refreshToken: string;
    };
  }
}
