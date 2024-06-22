"use client";

import Image from "next/image";
import AboutMe from "@/components/AboutMe";
import { useParams, useSearchParams } from "next/navigation";
import Education from "@/components/Education";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="w-full h-full snap-y snap-mandatory items-center justify-center overflow-y-scroll">
      <div className="snap-y snap-center w-full h-full flex" id="AboutMe">
        <AboutMe />
      </div>
      <div className="snap-y snap-center w-full h-full flex" id="Education">
        <Education />
      </div>
      <div className="snap-y snap-center w-full h-full flex" id="Skills">
        <Skills />
      </div>
    </div>
  );
}
