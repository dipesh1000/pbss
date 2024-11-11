import localFont from 'next/font/local';
import './globals.css';
import Header from './common/header';
import FooterComponent from './common/footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GlobalDataProvider } from '@/context/GlobalDataContext';

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <GlobalDataProvider>
      <html lang="en">
        <title>Personal Best Support Services</title>
        <body className={` antialiased `}>
          <Header />
          {children}
          <FooterComponent />
        </body>
      </html>
    </GlobalDataProvider>
  );
}
