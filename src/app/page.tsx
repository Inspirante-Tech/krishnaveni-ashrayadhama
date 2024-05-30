
import Hero from "@components/Hero"

import Contact from "@components/Contact";
import Team from "~/components/Team";
import FAQs from "~/components/FAQs";
import Testimonials from "~/components/Testimonials/page";



export default function Home() {
  return (
    <>
      <Hero />
      <main className="w-full px-16 md:px-40">
        <FAQs />
        <Team />s
        <Contact />
        
      </main>
      <Testimonials />
    </>

  );
}
