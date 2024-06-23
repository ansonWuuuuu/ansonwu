import Image from "next/image";
import Link from "next/link";
import TextCard from "./TextCard";

export default function AboutMe() {
  return (
    <div className="w-full h-full flex items-center justify-center overflow-auto">
      <div className="w-1/2 h-full bg-white flex items-center justify-center">
        <TextCard>
            <span className=" text-2xl font-bold text-primary-dark">
                About Me
            </span>
            <p>
            I am a fourth-year student majoring in Information Management at National Taiwan University. Have many experiences working on different kinds of project, which includes web app, text mining, unity game, database, operation research and statistic. I am also a member of web develop team of <Link href="https://riddlecity.ntuartfest.com/" className=" underline hover:text-primary hover:animate-pulse">NTU Art Fest 29th</Link> this year. As a result, I am familiar with many programming languages, Git flow, and cooperating with others. I approach learning different fields of knowledge with an open mind. I invest significant amount of times in all kinds of subjects. The process of working on projects brings a great sense of accomplishment. I am passionate about acquiring new knowledge and continuously expanding my skill set.
            </p>
        </TextCard>
      </div>
      <div className="w-1/2 h-full bg-white flex justify-center items-center">
        <Image src="/freelancer.png" alt="" width={200} height={200} />
      </div>
    </div>
  );
}