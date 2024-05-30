

import Hero from "@components/Hero"
import Story from "@components/Information/Story";
import Information from "@components/Information/Information";
import Facilities from "@components/Information/Facilities";
import Contact from "@components/Contact";
import Team from "~/components/Team";
import FAQs from "~/components/FAQs";
import Testimonials from "~/components/Testimonials/page";



export default function Home() {
  return (
    <>
      <Hero />
      <main className="w-full px-6 md:px-40">
      <Story />
      <Facilities/>
      <Information/>
        <FAQs />
        <Team />s
        <Contact />
        
      </main>
      <Testimonials />
    </>

  );
}
