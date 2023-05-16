export { default } from 'next-auth/middleware'

export const config = {
  matcher: ['/', '/admin/:path*', '/user/:path*'],
}

// export default withAuth(
//   // `withAuth` augments your `Request` with the user's token.
//   function middleware(req) {
//     // console.log(req.nextauth.token);
//   },
//   {
//     callbacks: {
//       authorized: ({ token }) => token?.role === 'admin',
//     },
//   },
// )

// export const config = { matcher: ['/admin'] }

// export default withAuth({
//   jwt: { decode: authOptions.jwt },
//   callbacks: {
//     authorized: ({ token }) => !!token,
//   },
// })

// import { NextApiRequest, NextApiResponse } from 'next'
// import { withAuth } from 'next-auth/middleware'
// import { Session } from 'next-auth'

// interface MyRequest extends NextApiRequest {
//   config: {
//     api: {
//       matcher: {
//         [key: string]: {
//           roles: string[]
//         }
//       }
//     }
//   }
//   nextauth?: {
//     token?: {
//       role?: string
//     }
//   }
// }

//@ts-ignore
// export default withAuth<MyRequest>(
//   async (req: MyRequest, res: NextApiResponse) => {
//     const url = req.url ?? ''
//     console.log(url)

//     if (req.config?.api?.matcher?.[url]?.roles) {
//       const requiredRoles = req.config.api.matcher[url].roles

//       const token = req?.nextauth?.token
//       const userRole = token?.role ?? ''

//       if (!requiredRoles.includes(userRole)) {
//         return {
//           redirect: {
//             destination: '/unauthorized',
//             permanent: false,
//           },
//         }
//       }
//     }

//     // Jeśli użytkownik ma wymaganą rolę lub trasa nie wymaga roli, wykonaj inne operacje lub kontynuuj przetwarzanie
//     // console.log(token, userRole);
//     return
//   },
//   {
//     callbacks: {
//       async authorized(req: MyRequest, res: NextApiResponse, session: Session) {
//         const url = req.url ?? ''

//         if (req.config?.api?.matcher?.[url]?.roles) {
//           const requiredRoles = req.config.api.matcher[url].roles

//           const token = req?.nextauth?.token
//           const userRole = token?.role ?? ''

//           if (!requiredRoles.includes(userRole)) {
//             res.status(403).json({ error: 'Unauthorized' })
//             return false
//           }
//         }

//         // Jeśli użytkownik ma wymaganą rolę lub trasa nie wymaga roli, zwróć true
//         return true
//       },
//     },
//   },
// )

// export const config = {
//   api: {
//     bodyParser: false,
//     matcher: {
//       '/admin': { roles: ['admin'] },
//       '/user': { roles: ['user', 'admin'] },
//     },
//   },
// }
