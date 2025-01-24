import { AboutSection } from "@/components/about-section";
import { KeyValues } from "@/components/key-values";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutSection />
      <main className="container py-12 px-5">
        <section className="mb-12 font-[family-name:var(--font-rethink)]">
          <h2 className="mb-6 text-3xl font-bold">
            Simany Driving School has been a pioneer in the field of driving
            training since 2008
          </h2>
          <p className="mb-6 text-gray-600">
            At Simany Driving School, we are dedicated to enhancing road safety
            in Zambia. Annually, statistics reveal 280,000 car crashes, with 600
            fatalities and countless injuries resulting from motor
            vehicle-related activities.
          </p>
          <p className="mb-6 text-gray-600">
            Our driving schools commitment is unwavering - to reduce and
            ultimately eliminate these incidents from ever occurring. At the
            core of our mission lies a team of dedicated individuals who embody
            professionalism, love, and compassion towards all our students.
            Recognizing the profound importance of imparting essential skills to
            our students, we equip them with the knowledge and mindset for safe
            and defensive driving.
          </p>
          <p className="text-gray-600">
            Furthermore, at our driving school, we emphasize the significance of
            courtesy and respect towards fellow drivers on the road. Together,
            lets pave the way to a safer future on the road. Join us in our
            journey to drive the future forward with safety in mind.
          </p>
        </section>
        <section className="mb-5 font-[family-name:var(--font-rethink)]">
          <h2 className="mb-6 text-3xl font-bold">
            Serving Western Province, Mongu
          </h2>
          <p className="text-gray-600">
            Our driving school remains committed to providing comprehensive
            driver education services to Mongu residents. Our experienced
            instructors understand the local roads, traffic patterns, and
            driving challenges unique to this region. We ensure that our
            students are well-prepared to navigate safely and confidently.
          </p>

          <p className="text-gray-600">
            Join us at SIMANY DRIVING SCHOOL as we collaborate to make the roads
            of Western Province safer for everyone.
          </p>
        </section>
      </main>
      <KeyValues />
    </div>
  );
}
