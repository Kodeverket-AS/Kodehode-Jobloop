import "./globals.css";
import { Roboto, Poppins } from "next/font/google";

import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/Footer";
import { ScrollToTopButton } from "../../components/Buttons";

const roboto = Roboto({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});
/**
 * Poppins is just temporary to try out the font
 * just so that it easy to see if it works. Currently doesnt work
 * with two fonts.
 *  */
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={roboto.className}>
      <body>
        <Navbar />
        <div className="flex-1 overflow-x-hidden">{children}</div>
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
