// "use client";
// import { useState } from "react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import * as z from "zod";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { useToast } from "@/components/ui/use-toast";
// import { Textarea } from "@/components/ui/textarea";

// import React from "react";

// const FormSchema = z.object({
//   first_name: z.string(),
//   last_name: z.string(),
//   email: z.string().email(),
//   phone_number: z.string(),
//   country: z.enum(["Zambia", "Malawi", "Zimbabwe"]),
//   details: z.string(),
// });

// type FormValues = {
//   first_name: string;
//   last_name: string;
//   email: string;
//   phone_number: string;
//   country: "Zambia" | "Malawi";
// };

// export default function ContactPage() {
//   const [loading, setLoading] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const { toast } = useToast();

//   const form = useForm<FormValues>({
//     resolver: zodResolver(FormSchema),
//     defaultValues: {
//       country: "Zambia",
//     },
//   });

//   return <div>First</div>;
// }
