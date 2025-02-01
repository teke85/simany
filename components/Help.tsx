import { MessageSquare, Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Help() {
  return (
    <section className="py-20">
      <div className="container font-[family-name:var(--font-rethink)] mx-auto px-4">
        <h2 className="text-4xl text-[#022461] font-bold text-center mb-4">
          How Can we Help?
        </h2>
        <p className="text-center text-gray-600 mb-12">
          We are available from 7am to 18pm central african time, 5 days a week.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardContent className="p-6 flex items-center flex-col">
              <div className="rounded-full bg-red-500 p-3 w-fit mb-4">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Chat</h3>
              <p className="flex flex-col items-center justify-center text-gray-600">
                Text us on WhatsApp <br />
                <a
                  href="tel:(800) 489-1896"
                  className="text-gray-600 hover:underline"
                >
                  (260)-979-944220
                </a>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex items-center flex-col">
              <div className="rounded-full bg-red-500 p-3 w-fit mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="flex flex-col items-center text-gray-600">
                <a
                  href="mailto:hello@coastlineacademy.com"
                  className="text-gray-600"
                >
                  akabeswaimasikusnr@gmail.com
                </a>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex items-center flex-col">
              <div className="rounded-full bg-red-500 p-3 w-fit mb-4 flex-col">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="flex flex-col items-center text-gray-600">
                Call us at{" "}
                <a
                  href="tel:(800) 489-1896 flex flex-col items-center"
                  className="text-gray-600"
                >
                  (260)-966-944220
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
