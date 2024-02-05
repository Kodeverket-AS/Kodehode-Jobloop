import Image from "next/image";
import { NavbarAlt } from "../../../components/navigation/Navbar";
import { ContactUsCheck } from "../../../components/ContactUsSection";

export default function Contact() {
  return (
    <>
      <NavbarAlt />
      <main className="flex flex-col items-center min-h-screen p-24">
        
      <ContactUsCheck></ContactUsCheck>
      </main>
    </>
  );
}