import type React from "react";
import { Car, RefreshCw, BookOpen } from "lucide-react";

const ServiceCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
}> = ({ title, description, icon }) => (
  <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
    <div className="flex flex-col items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-center text-gray-600">{description}</p>
  </div>
);

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: "Comprehensive Motor Vehicle Driving",
      description:
        "Master the art of driving with our in-depth course covering all aspects of vehicle operation, road safety, and defensive driving techniques.",
      icon: <Car className="w-8 h-8 text-white" />,
    },
    {
      title: "Short Refresher Courses",
      description:
        "Brush up on your driving skills or address specific areas of improvement with our targeted, efficient refresher courses.",
      icon: <RefreshCw className="w-8 h-8 text-white" />,
    },
    {
      title: "Road Language",
      description:
        "Become fluent in the language of the road, including signs, markings, and etiquette, ensuring smooth communication with other drivers and pedestrians.",
      icon: <BookOpen className="w-8 h-8 text-white" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container font-[family-name:var(--font-rethink)] mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          We offer a range of driving courses tailored to meet your needs,
          whether you are a beginner or looking to refine your skills.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <div className="font-[family-name:var(--font-rethink)] mt-16 text-center">
          <a
            href="#"
            className="bg-primary text-white font-semibold py-3 px-6 rounded-full hover:bg-primary-dark transition-colors duration-300"
          >
            Book a Course
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
