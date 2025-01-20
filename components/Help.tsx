import { MessageSquare, Mail, Phone } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export default function Help() {
  return (
    <section className="py-20">
      <div className="container font-[family-name:var(--font-rethink)] mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">How Can we Help?</h2>
        <p className="text-center text-gray-600 mb-12">
          We are available from 7am to 18pm central african time, 5 days a week.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <div className="rounded-full bg-black/90 p-3 w-fit mb-4">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Chat</h3>
              <p className="text-gray-600">
                Text us at on WhatsApp{' '}<br />
                <a href="tel:(800) 489-1896" className="text-gray-600 hover:underline">
                  (260)-979-944220
                </a>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="rounded-full bg-black/90 p-3 w-fit mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">
                <a href="mailto:hello@coastlineacademy.com" className="text-gray-600">
                  akabeswaimasikusnr@gmail.com
                </a>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="rounded-full bg-black/90 p-3 w-fit mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">
                Call us at{' '}
                <a href="tel:(800) 489-1896" className="text-gray-600">
                  (260)-979944220
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

