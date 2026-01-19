import D from "@/assets/donate.JPG";

function Donate() {
  return (
    <section id="about" className="w-full py-24 px-6 bg-[#59769d]">
      <div className="mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 text-left">
          <h2 className="mb-6 text-4xl text-white font-serif font-bold">
            Support Our Journey
          </h2>
          <p className="text-lg leading-relaxed text-black font-bold mb-6">
            At Sightshare, we work hard to deliver support to our patients. We
            think you should join our journey too!
          </p>

          <a
            href="gofundmeurl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white hover:underline text-[#59769d] font-serif font-bold py-2 px-6 rounded"
          >
            GoFundMe
          </a>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={D}
            alt="Donate"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Donate;
