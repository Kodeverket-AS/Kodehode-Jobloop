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
    "Kodehode er et programmeringskurs med en praktisk tilnærming til IT-utviklerfaget. Med fokus på de viktigste og mest dagsaktuelle teknologiene for dagens og fremtidens marked, omdanner vi utenforskap til et viktig utenforskap og ettertraktet arbeidskraft.",
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
