import React from "react";
import Navbar from "@/components/navbar";

const AboutPage = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Navbar />

      <p className="text-2xl font-bold">Oh quak... this site is currently under construction...</p>
    

      {children}
    </div>
  );
};

export default AboutPage;


