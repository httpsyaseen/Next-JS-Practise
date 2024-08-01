import { Poppins } from "next/font/google";
import "./globals.css";

import { Toaster } from "react-hot-toast";
import Header from "@/components/header";
import Footer from "@/components/footer";

const roboto = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Peach Flask",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-[#fff2ea]`}>
        <Header />
        <Toaster position="top-center" reverseOrder={false} />
        <main className="min-h-[92dvh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
