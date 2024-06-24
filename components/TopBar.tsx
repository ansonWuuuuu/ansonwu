"use client";

import { Lobster_Two } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { HoverCard, HoverCardContent } from "./ui/hover-card";
import { HoverCardTrigger } from "@radix-ui/react-hover-card";
import Image from "next/image";
import { Button } from "./ui/button";

const lobsterTwo = Lobster_Two({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  style: ["italic", "normal"],
});

export default function TopBar() {
  const router = useRouter();

  const handleScroll = (page: string, event: React.MouseEvent) => {
    event.preventDefault(); // Prevent default anchor behavior
    const element = document.getElementById(page);

    if (element) {
      // Use the `scrollIntoView` method for smooth scrolling
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const PageBtn = ({ page }: { page: string }) => {
    return (
      <a onClick={(e) => handleScroll(page, e)}>
        <span className="text-normal font-bold text-black mx-10 cursor-pointer hover:text-my-primary">
          {page}
        </span>
      </a>
    );
  };

  return (
    <div className="w-full max-h-[20%] flex justify-center items-center py-4 flex-wrap">
      <div className={lobsterTwo.className}>
        <Link href="/">
          <span className="text-3xl font-bold italic text-my-primary">
            Anson Wu
          </span>
        </Link>
      </div>
      <div className=" hidden sm:visible w-full sm:flex justify-center items-center mt-2">
        <PageBtn page="AboutMe" />
        <PageBtn page="Education" />
        <PageBtn page="Experiences" />
        <PageBtn page="Contact" />
      </div>

      <div className="sm:hidden w-full flex justify-center items-center mt-2">
        <HoverCard>
          <HoverCardTrigger>
            <Button variant={"ghost"}>
              <Image src="/icons/menu.png" width={30} height={30} alt="menu" />
            </Button>
          </HoverCardTrigger>
          <HoverCardContent>
            <div className="flex flex-col items-center justify-center">
              <PageBtn page="AboutMe" />
              <PageBtn page="Education" />
              <PageBtn page="Experiences" />
              <PageBtn page="Contact" />
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
}
