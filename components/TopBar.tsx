"use client";

import { Lobster_Two } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

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
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const PageBtn = ({ page }: { page: string }) => {
    return (
      <a onClick={(e) => handleScroll(page, e)}>
        <span className="text-normal font-bold text-black mx-10 cursor-pointer">
          {page}
        </span>
      </a>
    );
  };

  return (
    <div className="w-full max-h-[20%] flex justify-center items-center py-4 flex-wrap">
      <div className={lobsterTwo.className}>
        <Link href="/">
          <span className="text-3xl font-bold italic text-primary">
            Anson Wu
          </span>
        </Link>
      </div>
      <div className="w-full flex justify-center items-center mt-2">
        <PageBtn page="AboutMe" />
        <PageBtn page="Education" />
        <PageBtn page="Experiences" />
        <PageBtn page="Contact" />
      </div>
    </div>
  );
}
