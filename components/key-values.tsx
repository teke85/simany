import { Shield, Users, UserCheck, Car } from "lucide-react";

export function KeyValues() {
  return (
    <section className="py-0">
      <div className="container">
        <div className="text-center font-[family-name:var(--font-rethink)]">
          <h2 className="text-3xl font-bold">Our key values</h2>
          <p className="mt-4 text-gray-600">
            Our Driving School core values shape everything we do. They are the
            guiding principles that ensure you receive the highest quality
            driving education and service. Discover what drives us:
          </p>
        </div>
        <div className="font-[family-name:var(--font-rethink)] mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <ValueCard
            icon={<Shield className="h-8 w-8" />}
            title="Safety"
            description="Your safety is our top priority at our driving school. Our experienced instructors will teach you not only how to operate a vehicle but also the crucial skills and mindset needed to navigate today's roads safely."
          />
          <ValueCard
            icon={<Users className="h-8 w-8" />}
            title="Customer Service"
            description="From your initial inquiry to the moment you receive your driver's license, we're here to provide exceptional customer service and support every step of the way."
          />
          <ValueCard
            icon={<UserCheck className="h-8 w-8" />}
            title="Personalized Attention"
            description="We understand that everyone learns at their own pace. Our instructors work closely with you, providing personalized guidance and support to help you succeed."
          />
          <ValueCard
            icon={<Car className="h-8 w-8" />}
            title="Clean and Safe Vehicles"
            description="We ensure our training vehicles are impeccably clean and well-maintained, creating a comfortable and safe learning environment for every student."
          />
        </div>
      </div>
    </section>
  );
}

function ValueCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 rounded-full bg-red-600 p-4">{icon}</div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
