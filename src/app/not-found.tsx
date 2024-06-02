import { NextPage } from "next";

const Page404: NextPage = () => {
  const titleText: string = "Page Not Found";
  const bodyText: string =
    "Looks like you've taken a wrong turn.";

  return (
    <>
    <div className="flex flex-col min-h-screen justify-center items-center bg-primary-100">
      <div className="text-9xl font-black text-secondary-600">404</div>
      <div className="flex flex-col justify-center items-center">
        <h1
          className={`font-bold text-2xl md:text-5xl mb-1 md:mb-3 text-secondary-500/60 transition-colors duration-300 flex justify-center items-center text-center mx-2`}
        >
          {titleText}
        </h1>
        <a href="/">
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 sm:mt-2 bg-primary-500 p-4 mt-2 rounded-md font-bold hover:bg-primary-600  text-action-950">Return to Home</button>
        </a>
      </div>
    </div>
    </>
  );
};

export default Page404;

