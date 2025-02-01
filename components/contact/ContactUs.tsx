"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "./schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import React from "react";

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    setIsSubmitting(false);
    setSubmitSuccess(true);
    reset();
  };
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-left text-gray-500 font-[family-name:var(--font-rethink)]">
          Need a driving lesson? Want to make changes to your scheduled lessons?
          Have questions about the process? We are here to help!
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 font-[family-name:var(--font-rethink)]">
          <Card>
            <CardHeader className="text-gray-500">
              <CardTitle>Business Information</CardTitle>
              <CardDescription>Get in touch with us</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <MapPin size={32} className="text-red-500" />
                <span className="font-[family-name:var(--font-rethink)] text-gray-500">
                  Napsa Building, Ground Floor, Room No. 12/13 Northern Wing,
                  Mongu.
                </span>
              </div>
              <div className="flex items-center space-x-4 text-gray-500">
                <Phone size={32} className="text-red-500" />
                <span>+260979-944220</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-500">
                <Mail size={32} className="text-red-500" />
                <span>akabeswaimasikusnr@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-500">
                <Clock size={32} className="text-red-500" />
                <span>Mon-Fri: 9AM-5PM</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Contact Form</CardTitle>
              <CardDescription>Send us a message</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Input
                    placeholder="Name"
                    {...register("name")}
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    placeholder="Email"
                    type="email"
                    {...register("email")}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <Select
                    onValueChange={(value) =>
                      register("questionType").onChange({ target: { value } })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select question type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="support">Support</SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.questionType && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.questionType.message}
                    </p>
                  )}
                </div>
                <div>
                  <Textarea
                    placeholder="Message"
                    {...register("message")}
                    className={errors.message ? "border-red-500" : ""}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-500 hover:bg-red-500/90"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
              {submitSuccess && (
                <p className="text-green-500 mt-4 text-center">
                  Thank you for your message. We will get back to you soon!
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
