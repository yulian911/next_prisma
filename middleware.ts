// export { default } from 'next-auth/middleware';

// export const config = {
//   matcher: ['/products/:path*'],
// };

import { withAuth } from 'next-auth/middleware';

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    // console.log(req.nextauth.token);
  },
  {
    callbacks: {
      authorized: ({ token }) => token?.role === 'admin',
    },
  },
);

export const config = { matcher: ['/admin'] };

// export default withAuth({
//   jwt: { decode: authOptions.jwt },
//   callbacks: {
//     authorized: ({ token }) => !!token,
//   },
// })
