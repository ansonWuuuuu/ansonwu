import Image from "next/image";

export default function Contact() {
  const className =
    "max-w-[50px] max-h-[50px] aspect-square object-fill mx-10 cursor-pointer hover:scale-110";
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
  return (
    <div className="w-full h-full flex flex-wrap justify-center items-center">
      <div className="w-full flex flex-wrap justify-center">
        <span className="w-full flex justify-center text-4xl font-bold text-primary-dark my-8">Contact</span>

        <MyImg src="/contact/mail.png" />
        <MyImg src="/contact/phone.png" />
        <MyImg src="/contact/github.png" />
        <MyImg src="/contact/linkedin.png" />
      </div>
    </div>
  );
}
