'use client';
import Toast from '@/components/Toast/Toast';
import UserProvider from '@/contexts/UserContext';
import ErrorProvider from '@/contexts/ErrorContext';
import Navbar from 'components/Navbar/Navbar';
import { Barlow } from 'next/font/google';
import { useError } from '@/utils/hooks';
import 'styles/globals.scss';

const barlowFont = Barlow({
  variable: '--barlow-font',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
});

function ToastError() {
  const { error } = useError();

  return error ? <Toast error={error} /> : <></>;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
    <head>
      <title>5WC | 5 Digit World Cup 2024</title>
      <link rel='icon' href='/logo.png' />
      <meta property="og:title" content="5 Digit World Cup" />
      <meta property="og:site_name" content="5WC" />
      <meta property="og:url" content="https://5wc.stagec.xyz" />
      <meta property="og:description" content="Calling all 5 digit osu! players! After a long wait, the 5 Digit World Cup is back — and it's better than ever.

      The 5 Digit World Cup is an annual world-cup-style community tournament for any osu! player with a 5 digit rank. Each year, team organisers from around the world seek out the best 5 digits to represent their country in hopes of winning the title of 5WC champion. In a few weeks, 32 qualifying countries will battle it out across 6 weeks of intense bracket stage competition — everyone is invited to participate and spectate each weekend!" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://5wc.stagec.xyz/logo.png" />
    </head>
    <ErrorProvider>
      <UserProvider>
        <body className={barlowFont.variable}>
        <Navbar />
        <ToastError />
        <img className='bg-img' alt='bg' src='/bg.png' />
        <main>{children}</main>
        </body>
      </UserProvider>
    </ErrorProvider>
    </html>
  );
}
