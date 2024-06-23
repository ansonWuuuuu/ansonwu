"use client";

import Image from "next/image";
import AboutMe from "@/components/AboutMe";
import { useParams, useSearchParams } from "next/navigation";
import Education from "@/components/Education";
import Experiences from "@/components/Experiences";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="w-full h-full snap-y snap-mandatory items-center justify-center overflow-y-scroll">
      <div className="snap-y snap-center w-full h-full flex" id="AboutMe">
        <AboutMe />
      </div>
      <div className="snap-y snap-center w-full h-full flex" id="Education">
        <Education />
      </div>
      <div className="snap-y snap-center w-full h-full flex" id="Experiences">
        <Experiences />
      </div>
      <div className="snap-y snap-center w-full h-full flex" id="Contact">
        <Contact />
      </div>
    </div>
  );
}
