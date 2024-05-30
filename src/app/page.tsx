// import Hero from "@components/Hero";

import Contact from "@components/Contact";
import Team from "~/components/Team";
import Testimonials from "~/components/Testimonials/page";
import Supporters from "~/components/Supporters/Supporters";
import Hero from "~/components/Hero";
import Fqas from "~/components/Fqas/Fqas";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="w-full px-16 md:px-40">
        <Team />s
        <Contact />
      </main>
      <Fqas/>
      <Supporters />
      <Testimonials />
    </>
  );
}
