import Hero from "@components/Hero/Hero";
import Story from "@components/Information/Story";
import Information from "@components/Information/Information";
import Facilities from "@components/Information/Facilities";
import Testimonials from "~/components/Testimonials/page";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="w-full px-6 md:px-40">
        <Story />
        <Facilities />
        <Information />
      </main>
      <Testimonials />
    </>
  );
}
