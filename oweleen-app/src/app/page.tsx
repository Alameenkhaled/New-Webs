import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Solutions } from "@/components/Solutions";
import { InnovationLab } from "@/components/InnovationLab";
import { Articles } from "@/components/Articles";
import { Awards } from "@/components/Awards";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Inefficiency } from "@/components/Inefficiency";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Hero />
      <Inefficiency />
      <Solutions />
      <InnovationLab />
      <Articles />
      <Awards />
      <Contact />
      <Footer />
    </main>
  );
}
