import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen pt-50 h-screen w-full flex items-center justify-center bg-gray-100"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-xl lg:text-5xl font-bold mb-4">
            Welcome to Simany Professional Driving School
          </h1>
          <p className="text-xl mb-8">Your First Choice Driving School.</p>
          <a
            href="#contact"
            className="bg-red-500 text-white px-6 py-3 rounded-full cursor-pointer text-lg font-semibold hover:bg-yellow-600 transition-colors"
          >
            Get in touch
          </a>
        </div>
        <div className="md:w-1/2 h-full">
          <Image
            src="/placeholder.svg"
            alt="Hero Image"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
