import Image from "next/image";
import { supporters } from "~/constants";

const Supporters: React.FC<{ speed?: number }> = ({ speed = 5000 }) => {
  return (
    <section className="bg-primary-100 flex justify-center items-center Supportercontainer content-container">
      <div className="max-w-6xl px-4 py-6 sm:px-2 lg:px-2 lg:py-8 w-full relative sm:mt-5">
        <h2 className={`text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-2 sm:mb-4 pt-14 sm:pt-12`}>
          Sepecial Thanks To Our Supporters
        </h2>
        <p className="text-center text-sm text-gray-700 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          quibusdam similique labore fuga impedit, consectetur facilis odit
          accusantium quo, doloribus iste.ldoloribus iste.l

        </p>
        <div className="flex overflow-x-auto space-x-10  sm:mt-4 scrollbar-none group">
          <div className="flex space-x-10 animate-loop-scroll group-hover:paused">
            {supporters.map(({ id, url, name }) => (
              <div className="flex flex-col items-center max-w-[250px] px-4 py-2 sm:px-3 lg:px-2 lg:py-2 mb-4 sm:mb-6 lg:mb-8" key={id}>
                <Image width={160} height={160} src={url} alt={name} className="mb-2 rounded-full aspect-square" />
                <p className="text-center text-sm sm:text-base font-popins text-action-950 ">{name}</p>
              </div>
            ))}
          </div>
          <div className="flex space-x-10 animate-loop-scroll group-hover:paused" aria-hidden="true">
            {supporters.map(({ id, url, name }) => (
              <div className="flex flex-col items-center max-w-[250px] px-4 py-2 sm:px-3 lg:px-2 lg:py-2 sm:mb-6 lg:mb-8" key={id}>
                <Image width={160} height={160} src={url} alt={name} className="mb-2 rounded-full aspect-square" />
                <p className="text-center text-sm sm:text-base font-popins text-action-950">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Supporters;
