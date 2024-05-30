import Header from "@components/Header"
import Footer from "~/components/Footer/Footer"
import Hero from "@components/Hero"

import Contact from "@components/Contact";
import Team from "~/components/Team";
import FAQs from "~/components/FAQs";
import Testimonials from "~/components/Testimonials/page";



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
