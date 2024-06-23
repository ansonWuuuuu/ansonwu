"use client";

import { Lobster_Two } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";

const lobsterTwo = Lobster_Two({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  style: ["italic", "normal"],
});

export default function TopBar() {
  const router = useRouter();

  const PageBtn = ({ page }: { page: string }) => {
    return (
      <Link href={`#${page}`}>
        <span className="text-normal font-bold text-black mx-10 cursor-pointer">
          {page}
        </span>
      </Link>
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
