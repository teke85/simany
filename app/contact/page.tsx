"use client";
import ContactUs from "@/components/contact/ContactUs";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us | Simany Driving School Mongu",
  description:
    "Get in touch with Simany Driving School in Mongu. Contact us for enrollment information, pricing, and scheduling of driving lessons.",
  keywords: [
    "contact Simany",
    "driving school contact",
    "Mongu driving lessons",
    "enroll driving school",
  ],
};

const Contact = () => {
  return (
    <>
      <ContactUs />
      {/* <Map /> */}
    </>
  );
};

export default Contact;
