import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  const className =
    "sm:max-w-[50px] sm:max-h-[50px] max-w-[10%] aspect-square object-fill";
  const MyImg = ({ src }: { src: string }) => {
    return (
      <Image
        src={src}
        alt=""
        width={1000}
        height={1000}
        className={className}
      />
    );
  };

  const classNameA = "min-w-[70%] max-w-full flex justify-between items-center text-lg font-bold my-2  cursor-pointer hover:scale-105 hover:text-my-primary"
  const classNameSpan = ""
  return (
    <div className="w-[80%] sm:w-[50%] h-full flex flex-wrap justify-center items-center">
      <div className="w-full flex flex-wrap justify-center">
        <span className="w-full flex justify-center text-4xl font-bold text-my-primary-dark my-8">
          Contact
        </span>

        <a className={classNameA} href="mailto:ansonwu0604@gmail.com">
          <MyImg src="/contact/mail.png" />
          <span className={classNameSpan}>ansonwu0604@gmail.com</span>
        </a>
        <a className={classNameA} href="tel:+886956022661">
          <MyImg src="/contact/phone.png" />
          <span className={classNameSpan}>+886 956022661</span>
        </a>
        <a className={classNameA} href="https://github.com/ansonWuuuuu">
          <MyImg src="/contact/github.png" />
          <span className={classNameSpan}>ansonWuuuuu</span>
        </a>
        <a className={classNameA} href="https://www.linkedin.com/in/ansonwuuuuu">
          <MyImg src="/contact/linkedin.png" />
          <span className={classNameSpan}>www.linkedin.com/in/ansonwuuuuu</span>
        </a>
      </div>
    </div>
  );
}
