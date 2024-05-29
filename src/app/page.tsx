import Hero from "@components/Hero"
import Testimonials from "@components/Testimonials";
import Contact from "@components/Contact";
import Team from "~/components/Team";
import FAQs from "~/components/FAQs";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="w-full px-16 md:px-40">
        <FAQs />
        <Team />
        <Contact />
        <Testimonials />
      </main>
    </>

  );
}
