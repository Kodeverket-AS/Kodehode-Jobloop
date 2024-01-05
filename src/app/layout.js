import "./globals.css";
import { Roboto, Didact_Gothic, Nunito_Sans } from "next/font/google";
import { Inter } from "next/font/google";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/Footer";
import { ScrollToTopButton } from "../../components/Buttons";

//const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const didact_gothic = Didact_Gothic({
  weight: "400",
  subsets: ["latin"],
});

const nunito_sans = Nunito_Sans({
  weight: "800",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        <div className="flex-1 overflow-x-hidden">{children}</div>
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
