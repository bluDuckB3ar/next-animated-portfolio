import React from "react";
import BackButton from "@/components/BackButton";

const ContactLayout = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold">Contact</h1>
      <p className="text-2xl font-bold">Currently under construction...</p>
      <BackButton />
      {children}
    </div>
  );
};

export default ContactLayout;


