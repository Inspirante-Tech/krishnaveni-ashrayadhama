function GetInTouch() {
  return (
    <section className=" bg-primary-50 content-container">
    <div className="flex flex-col items-center gap-4 rounded-lg bg-secondary-400 p-6 shadow-lg sm:flex-row sm:justify-between">
      <strong className="text-xl text-white  font-popins sm:text-xl">
        {" "}
        Want to Spread Smile ?{" "}
      </strong>

      <a
        className="inline-flex items-center gap-2  rounded-md border  bg-action-800 px-8 py-3 text-primary-300 hover:bg-transparent hover:text-white focus:outline-none focus:ring "
        href="#"
      >
        <span className="text-sm font-medium"> Get In Touch</span>
      </a>
    </div>
  </section>
  )
}

export default GetInTouch