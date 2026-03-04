import "./globals.css";
import { Roboto } from "next/font/google";

import Footer from "../../components/Footer";
import { ScrollToTopButton } from "../../components/Buttons";
import Navigation from "../../components/navigation/Navigation";

const roboto = Roboto({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

// Wyłącza cache stron – treść z Sanity aktualizuje się od razu po zmianie
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Kodehode: Kodekurs og rekruttering til IT-bransjen",
  description: "Dyktige junior-utviklere til din bedrift? Kodehode er et programmeringskurs med en praktisk tilnærming til IT-utvikler faget. Vi fokuserer på de viktigste og mest dagsaktuelle teknologiene for dagens og fremtidens marked. Sammen omdanner vi utenforskap til viktig og ettertraktet arbeidskraft.",
  keywords: [
    "kodekurs",
    "programmeringskurs", 
    "IT-utvikler",
    "frontend utvikler",
    "junior utvikler",
    "rekruttering IT",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
    "Git",
    "VS Code",
    "Express",
    ".NET",
    "AMO",
    "kodehode",
    "jobloop"
  ],
  authors: [{ name: "Kodehode" }],
  creator: "Kodehode",
  publisher: "Kodehode",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "no_NB",
    url: "https://kodehode.no",
    title: "Kodehode: Kodekurs og rekruttering til IT-bransjen",
    description: "Dyktige junior-utviklere til din bedrift? Kodehode er et programmeringskurs med en praktisk tilnærming til IT-utvikler faget.",
    siteName: "Kodehode",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kodehode: Kodekurs og rekruttering til IT-bransjen",
    description: "Dyktige junior-utviklere til din bedrift? Kodehode er et programmeringskurs med en praktisk tilnærming til IT-utvikler faget.",
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="no-nb"
      className={roboto.className}>
      <body className=" flex flex-col   mx-auto  bg-kv-white overflow-x-hidden">
        <Navigation />
        <div className="mb-10" >
          {children}
        </div>
        <ScrollToTopButton />
        <Footer />
      
      </body>
    </html>
  );
}
