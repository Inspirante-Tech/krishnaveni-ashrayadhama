import Image from "next/image";
import Contactform from "~/components/ContactForm/ContactForm";

export default function Contact() {
  return (
    <main className="bg-white content-container mt-20">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <Image
            alt=""
            width={1000}
            height={1000}
            src="https://cdn.sanity.io/images/8q1t3fe9/production/9377f533bf2d22287be64f38d09c4130163fcf10-640x360.webp?fit=max&auto=format"
            className="absolute inset-0 h-full w-full w-870 object-cover  opacity-80 "
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <h2 className="mt-6 text-3xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to vriddhashrama
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              nam dolorum aliquam, quibusdam aperiam voluptatum.
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to vriddhashrama
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>
            </div>

            <Contactform />
          </div>
        </main>
      </div>
    </main>
  );
}
