import Testimonials from "~/components/Testimonials/page";
import Supporters from "~/components/Supporters/Supporters";
import Hero from "~/components/Hero/Hero";
import Fqas from "~/components/Fqas/Fqas";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="w-full px-16 md:px-40">
        <Fqas />
        <Supporters />
        <Testimonials />
      </main>

    </>
  );
}
