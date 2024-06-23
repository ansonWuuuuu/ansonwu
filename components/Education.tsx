import Image from "next/image";
import TextCard from "./TextCard";

export default function Education() {
  return (
    <div className="w-full h-full flex  items-center justify-center">
      <div className="w-1/2 h-full bg-white flex items-center justify-center">
        <Image src="/ntu.png" alt="" width={200} height={100} className="max-w-[70%] max-h-[30%] object-contain" />
        <Image src="/ntu-im.png" alt="" width={200} height={100} className="max-w-[70%] max-h-[30%] object-contain" />
      </div>
      <div className="w-1/2 h-full bg-white flex items-center justify-center overflow-auto">
        <TextCard className="overflow-y-auto">
          <span className="text-2xl font-bold text-primary-dark">National Taiwan University</span>
          <p className="text-lg flex-grow">
            Information Management
          </p>
          <p className="text-lg">
            2021-present
          </p>

          <ul className="list-disc ml-6">
            <li>
              Academic Performance
              <ul className="list-disc ml-6">
                <li>
                  Academic Achievement Award, 2024. (Department Rank: 1/47, GPA:
                  4.27)
                </li>
                <li>Average GPA of all semesters: 4.14/4.3</li>
              </ul>
            </li>

            <li>
              Courses
              <ul className="list-disc ml-6">
                <li>
                  Programming Design, Data Structures, Algorithms, Operating
                  System, Web Programming, Statistics, Computer Networks and
                  Applications, Game Programming, Database Management,
                  Information Retrieval and Text Mining, Deep Learning,
                  Computer Vision, Digital Image Processing
                </li>
              </ul>
            </li>
          </ul>
        </TextCard>
      </div>
    </div>
  );
}
