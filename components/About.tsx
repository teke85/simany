import imgURL from "../public/assets/images/image_1.jpeg";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container font-[family-name:var(--font-lora)] mx-auto px-4">
        <div className="max-w-full md:max-w-5xl mx-auto flex gap-4 font-[family-name:var(--font-rethink)]">
          <div className="flex w-full gap-10 flex-col md:justify-between mx-auto md:flex-row">
            <div className="md:max-w-md flex text-gray-500 flex-col">
              <h2 className="text-4xl font-bold mb-8 text-[#022461] text-left">
                About Simany
              </h2>
              <p className="text-md mb-8">
                Simany Professional Driving School is centrally situated in the
                Hub of Mongu at Napsa House (Near Barotse Shopping Mall).
              </p>
              <p className="text-md">
                It is headed by Mr Akabeswa Imasiku with an instructors rating
                with Class B. He is a holder of a Zambian Driving Licence for
                Fifty Two (52) years.
              </p>
              <p className="font-bold text-xl mt-8">
                Akabeswa Imasiku, Director Operations
              </p>
            </div>
            <div className="md:max-w-md">
              <Image
                src={imgURL}
                alt="instructor image"
                className="w-full h-full object-cover rounded-xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
