import { Code, Palette, Megaphone } from 'lucide-react'

const services = [
  {
    icon: <Palette className="w-12 h-12 mb-4 text-red-500" />,
    title: 'Comprehensive Motor Vehicle Driving',
    description: 'We facilitate a detailed teveta syllabus. We offer personalised instructions according to a persons needs.'
  },
  {
    icon: <Code className="w-12 h-12 mb-4 text-red-500" />,
    title: 'Short refresher courses',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    icon: <Megaphone className="w-12 h-12 mb-4 text-red-500" />,
    title: 'Road Language',
    description: 'We help you reach your target audience and grow your online presence.'
  }
]

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white font-[family-name:var(--font-rethink)] p-8 rounded-lg shadow-md text-center">
              {service.icon}
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

