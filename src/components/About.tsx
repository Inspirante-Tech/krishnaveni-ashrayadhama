import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function About() {
  return (
    <>
      <Header />
      <div className="">
        <h1 className="text-3xl text-black-900 text-center py-5 font-bold hover:text-green-500 transition ease-in-out duration-500">
          About Krishnaveni Vridddhashrama
        </h1>
        <p className="container mx-auto text-justify my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
          asperiores aut tempore voluptatibus minus placeat ad eveniet numquam
          voluptatum accusantium. Ipsa voluptatum consequuntur sit fugit
          temporibus voluptate nesciunt perferendis facere, adipisci eum
          dignissimos corrupti deserunt sint numquam. Quidem maiores ipsum
          corrupti sunt, quis dignissimos repudiandae tenetur recusandae labore
          tempora eos eum aperiam eius numquam suscipit, sit accusantium sequi
          neque quas ullam. Culpa reiciendis pariatur et, reprehenderit ea quos
          laudantium architecto voluptas natus veniam illo eligendi quae
          asperiores saepe voluptate, suscipit modi blanditiis expedita
          repellendus. Iusto quas et libero necessitatibus minima. Incidunt
          voluptate cum itaque laboriosam ipsum repellendus quasi error! Sit
          corporis quod, velit dignissimos porro doloribus blanditiis accusamus
          similique neque officiis modi quo veritatis aspernatur quidem nisi in
        </p>
      </div>
      <br></br>
      <div className="flex my-16 mx-16">
        <img
          className="-ml-0.6 mx-10 w-1/2 h-auto object-cover float-right rounded-2xl hover:shadow-xl transition ease-out duration-500"
          src="https://placehold.co/600x400/png"
          alt="Text box with number"
        ></img>
        <div className="flex-grow px-4">
          <p className="text-3xl py-8 my-5 font-semibold hover:text-green-500 transition ease-in-out duration-500 mx-4 ">
            Why This Initiative?
          </p>
          <p className="text-justify -px-2 mr-4 mx-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam soluta
            labore quaerat error! Alias consequatur distinctio atque ab magnam
            nulla odio nesciunt officiis nisi quia! Nemo natus mollitia
            similique voluptate, cupiditate voluptatem nostrum accusantium earum
            dolorum ipsum ipsam nulla eligendi deserunt magnam ipsa quisquam
            beatae sapiente aut perferendis alias deleniti quos. Labore, quae
            pariatur officiis totam assumenda ab voluptate blanditiis eveniet id
            eos exercitationem corporis modi ut asperiores mollitia, veniam
            unde, aut distinctio molestiae eum odit. Harum mollitia ea beatae.
            Officiis explicabo omnis illum. Est deleniti cumque aliquam impedit
            a sit, dolores quo incidunt cupiditate quod ducimus cum laboriosam
            odio.
          </p>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="flex my-16 mx-16">
        <div className="flex-grow px-4">
          <p className="text-3xl py-8 my-5 font-semibold hover:text-green-500 transition ease-in-out duration-500 mx-5">
            Why This Initiative?
          </p>
          <p className="text-justify -px-2 mr-4 mx-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam soluta
            labore quaerat error! Alias consequatur distinctio atque ab magnam
            nulla odio nesciunt officiis nisi quia! Nemo natus mollitia
            similique voluptate, cupiditate voluptatem nostrum accusantium earum
            dolorum ipsum ipsam nulla eligendi deserunt magnam ipsa quisquam
            beatae sapiente aut perferendis alias deleniti quos. Labore, quae
            pariatur officiis totam assumenda ab voluptate blanditiis eveniet id
            eos exercitationem corporis modi ut asperiores mollitia, veniam
            unde, aut distinctio molestiae eum odit. Harum mollitia ea beatae.
            Officiis explicabo omnis illum. Est deleniti cumque aliquam impedit
            a sit, dolores quo incidunt cupiditate quod ducimus cum laboriosam
            odio.
          </p>
        </div>
        <img
          className="mx-9 w-1/2 h-auto object-cover float-right rounded-2xl hover:shadow-xl transition ease-out duration-500"
          src="https://placehold.co/600x400/png"
          alt="Text box with number"
        ></img>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
