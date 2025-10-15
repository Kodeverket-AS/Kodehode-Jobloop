import "./globals.css";
import { Roboto } from "next/font/google";

import Footer from "../../components/Footer";
import { ScrollToTopButton } from "../../components/Buttons";
import Navigation from "../../components/navigation/Navigation";

const roboto = Roboto({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Kodehode: Kodekurs og rekruttering til IT-bransjen",
  description:
    "Dyktige junior-utviklere til din bedrift? Kodehode er et programmeringskurs med en praktisk tilnærming til IT-utvikler faget. Vi fokuserer på de viktigste og mest dagsaktuelle teknologiene for dagens og fremtidens marked. Sammen omdanner vi utenforskap til viktig og ettertraktet arbeidskraft.",
  /*keywords: [
    "Kode",
    "Programmerings",
    "AMO", 
    "IT-Utvikler",
    "Frontend",
    "HTML",
    "CSS",
    "Javascript",
    "React",
  ],*/
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="no-nb"
      className={roboto.className}>
      <body className=" flex flex-col   mx-auto  bg-kv-white">
        <Navigation />
        <div className="mb-10" >
          {children}
        </div>
        <ScrollToTopButton />
        <div className="-mx-3 md:-mx-5 2xl:mx-0">
          <Footer />
        </div>
      </body>
    </html>
  );
}
