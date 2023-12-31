import { Noto_Sans_Thai } from "next/font/google";
import './globals.css'
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

const notosansthai = Noto_Sans_Thai({ subsets: ["latin"] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={notosansthai.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
