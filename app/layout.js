import { Inter, Roboto_Flex } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar";
import { wrap } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My portfolio",
  description: "My portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <body className={`${inter.className} flex flex-row  justify-between m-5`}>
          <NavBar />
       
        {children}
      </body>
    </html>
  );
}
