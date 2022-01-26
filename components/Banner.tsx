import image from "../public/bulb.png";

function Banner() {
  return (
    <div className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-5">
      <div className="px-10 space-y-5">
        <h1 className="text-6xl max-w-xl font-serif">
          <span className="underline decoration-black decoration-4">
            Your Thoughts
          </span>{" "}
          is a place to read and connect
        </h1>
        <h2>
          It's easy and free to read on any topic and stay up to date with
          millions of topics
        </h2>
      </div>
      <img
        className="hidden md:inline-flex h-32 lg:full"
        src={image.src}
        alt=""
      />
    </div>
  );
}

export default Banner;
