import axios from 'axios';
import Cookies from 'js-cookie';
import { getServerSession } from 'next-auth';
import { authOptions } from './authOptions';

export async function getSession() {
  return await getServerSession(authOptions);
}

const $host = axios.create({
  baseURL: 'http://localhost:3000/',
});

const $authHost = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: { 'Content-Type': 'application/json' },
});

const authInterceptor = async (config: any) => {
  const session = await getSession();
  //   const poka=localStorage.getItem('user').slice(1, 188)

  config.headers.authorization = session?.user.accessToken;
  // console.log(config)
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
