import Header from "@components/Header"
import Footer from "@components/Footer"
import Hero from "@components/Hero"
import Testimonials from "@components/Testimonials";
import Contact from "@components/Contact";
import Team from "~/components/Team";
import FAQs from "~/components/FAQs";

export default function Home() {
  return (
    <main className="">
      <Header/>
      <Hero/>
      <FAQs/>
      <Team/>
      <Contact/>
      <Testimonials/>
      <Footer/>
    </main>
  );
}
