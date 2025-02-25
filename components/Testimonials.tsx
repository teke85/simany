import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    image: "/assets/images/student_1.jpeg",
    name: "Patton Chinga",
    comment: "I can advise would be drivers to come to Simany!",
  },
  {
    image: "/assets/images/student_2.jpeg",
    name: "Maureen Ngolofwana",
    comment: "I enjoyed learning with Mr Akabeswa he is very patient.",
  },
  {
    image: "/assets/images/student_5.jpeg",
    name: "Br Kennedy Phiri",
    comment: "The School is Excellent.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-[#022461] font-bold mb-12 font-[family-name:var(--font-rethink)] text-center">
          What our students are saying about their driving lessons...
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6 flex flex-col font-[family-name:var(--font-rethink)] items-center text-center">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-[family-name:var(--font-rethink)]">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600 font-[family-name:var(--font-rethink)]">
                  {testimonial.comment}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
