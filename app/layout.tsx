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

      <meta name="description" content="Calling all 5 digit osu! players! After a long wait, the 5 Digit World Cup is back — and it's better than ever.

The 5 Digit World Cup is an annual world-cup-style community tournament for any osu! player with a 5 digit rank." />

      <meta property="og:url" content="https://5wc.stagec.xyz" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="5 Digit World Cup" />
      <meta property="og:description" content="Calling all 5 digit osu! players! After a long wait, the 5 Digit World Cup is back — and it's better than ever.

The 5 Digit World Cup is an annual world-cup-style community tournament for any osu! player with a 5 digit rank." />
      <meta property="og:image" content="https://5wc.stagec.xyz/logo_and_name.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="5wc.stagec.xyz" />
      <meta property="twitter:url" content="https://5wc.stagec.xyz" />
      <meta name="twitter:title" content="5 Digit World Cup" />
      <meta name="twitter:description" content="Calling all 5 digit osu! players! After a long wait, the 5 Digit World Cup is back — and it's better than ever.

The 5 Digit World Cup is an annual world-cup-style community tournament for any osu! player with a 5 digit rank." />
      <meta name="twitter:image" content="https://5wc.stagec.xyz/logo_and_name.png" />
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
