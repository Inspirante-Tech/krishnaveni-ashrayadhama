<<<<<<< HEAD
import Header from "@components/Header"
import Footer from "~/components/Footer/Footer"
=======
>>>>>>> 80ed1f650728171d84c79c8e86832ac03dcb657d
import Hero from "@components/Hero"

import Contact from "@components/Contact";
import Team from "~/components/Team";
import FAQs from "~/components/FAQs";
import Testimonials from "~/components/Testimonials/page";



export default function Home() {
  return (
<<<<<<< HEAD
    <main className="">
      <Header/>
      <Hero/>
      <FAQs/>
      <Team/>
      <Contact/>  
       <Testimonials/>
      <Footer/>
    </main>
=======
    <>
      <Hero />
      <main className="w-full px-16 md:px-40">
        <FAQs />
        <Team />
        <Contact />
        <Testimonials />
      </main>
    </>

>>>>>>> 80ed1f650728171d84c79c8e86832ac03dcb657d
  );
}
