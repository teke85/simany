import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PricingPage() {
  const courseDetails = [
    {
      item: "Full driving course for 21 working days (inclusive of tuition, car fuel on class B - Manual)",
      price: "K2,500.00",
    },
    {
      item: "Medical Certificate (Lewanika General Hospital)",
      price: "K200.00",
    },
    { item: "Provisional Driving License (RTSA)", price: "K117.00" },
    { item: "Test Booking Fees (RTSA)", price: "K90.00" },
    { item: "Driving License Card (RTSA)", price: "K145.00" },
    {
      item: "Vehicle Hire for Test (Student Free) when available",
      price: "K300.00",
    },
  ];

  const termsAndConditions = [
    "Payment in full before commencement of classes",
    "Quotation valid for 7 days only",
    "Students must attend school lessons regularly, at designated places and times only",
    "Absence from school for more than 7 days renders expulsion from school",
    "Fees are Non refundable",
    "The road Traffic Act No. 11 of 2002 and RTSA regulations apply",
    "Course to be done within specified period, failure to which a student will forfeit the days and cash without recourse",
    "Practical's will be conducted when visibility is clear and the road surface is safe",
    "A photocopy of the acquired Drivers License to be retained by the school for records and returns",
    "This form is valid only when acceptance is approved by the Director",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-[family-name:var(--font-lora)] font-bold text-center mb-8">
        Driving School Pricing
      </h1>

      <Card className="mb-8 font-[family-name:var(--font-rethink)]">
        <CardHeader>
          <CardTitle>Course Details and Pricing</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {courseDetails.map((detail, index) => (
              <li key={index} className="flex justify-between items-start">
                <span className="text-md">{detail.item}</span>
                <span className="font-semibold">{detail.price}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Terms and Conditions</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside font-medium space-y-2">
            {termsAndConditions.map((term, index) => (
              <li
                key={index}
                className="text-md font-[family-name:var(--font-rethink)]"
              >
                {term}
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>
    </div>
  );
}
