import "./globals.css";
import { Roboto } from "next/font/google";

import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/Footer";
import { ScrollToTopButton } from "../../components/Buttons";
import Navigation from "../../components/navigation/Navigation";

const roboto = Roboto({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Kodehode",
  description:
    "Dyktige junior-utviklere til din bedrift? Kodehode er et programmeringskurs med en praktisk tilnærming til IT-utvikler faget. Vi fokuserer på de viktigste og mest dagsaktuelle teknologiene for dagens og fremtidens marked. Sammen omdanner vi utenforskap til viktig og ettertraktet arbeidskraft.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="bg-[#fafafa]">
        <Navigation />
        <div className="flex-1 overflow-x-hidden">{children}</div>
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
