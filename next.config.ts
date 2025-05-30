import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
  images: {
    domains: [
      'cdn2.ivivu.com',
      'scontent.fdad3-1.fna.fbcdn.net',
      'scontent.fdad3-2.fna.fbcdn.net',
      'scontent.fdad3-3.fna.fbcdn.net',
      'scontent.fdad3-4.fna.fbcdn.net',
      'scontent.fdad3-5.fna.fbcdn.net',
      'scontent.fhan2-3.fna.fbcdn.net'
    ],
  },
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);