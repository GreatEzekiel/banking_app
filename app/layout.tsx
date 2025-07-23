import './globals.css';
import { IBM_Plex_Serif } from 'next/font/google';

const ibmPlexSerif = IBM_Plex_Serif({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'My App',
  description: 'Horizon is a modern banking platfomrm for everyone',
  icons: {
    icon: '/icons/logo.svg',
  },

};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={ibmPlexSerif.className}>{children}</body>
    </html>
  );
}


// //import type { Metadata } from "next";
// //import { Geist, Geist_Mono } from "next/font/google";
// import { IBM_Plex_Serif } from 'next/font/google'
// import "./globals.css";

// // const geistSans = Geist({
// //   variable: "--font-geist-sans",
// //   subsets: ["latin"],
// // });

// // const geistMono = Geist_Mono({
// //   variable: "--font-geist-mono",
// //   subsets: ["latin"],
// // });

// const ibm = IBM_Plex_Serif({
//   subsets: ["latin"],
//   weights: ["400"]
// });

// export const metadata = {
//   title: "Horizon",
//   description: "Horizon is a modern banking platfomrm for everyone.",
//   icons: {
//     icon: "/icons/logo.svg",}
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className={ibm.className}>
//         {children}
//       </body>
//     </html>
//   )
// }


// // export default function RootLayout({
// //   children,
// // }: Readonly<{
// //   children: React.ReactNode;
// // }>) {
// //   return (
// //     <html lang="en">
// //       <body
// //         //className={`${geistSans.variable} ${geistMono.variable} ${ibm.variable} antialiased`}
// //         className={`${geistSans.variable} ${geistMono.variable} ${ibm.variable} antialiased`}
// //       >
// //         {children}
// //       </body>
// //     </html>);}
