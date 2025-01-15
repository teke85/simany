import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    image: "https://fakeimg.pl/250x250",
    name: "Alex Thompson",
    comment: "Thanks to this driving school, I passed my test on the first try! The instructors are patient and thorough."
  },
  {
    image: "https://fakeimg.pl/250x250",
    name: "Sophia Lee",
    comment: "I was nervous about learning to drive, but their step-by-step approach made it easy and enjoyable."
  },
  {
    image: "https://fakeimg.pl/250x250",
    name: "Marcus Johnson",
    comment: "The defensive driving course here is excellent. It's made me a much more confident and safe driver."
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600">{testimonial.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
