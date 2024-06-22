import Image from "next/image";
import TextCard from "./TextCard";

export default function Skills() {
  return (
    <div className="w-full h-full flex  items-center justify-center">
      <div className="w-1/2 h-full bg-white flex items-center justify-center">
        <Image
          src="/ntu.png"
          alt=""
          width={200}
          height={100}
          className="max-w-[70%] max-h-[30%] object-contain"
        />
        <Image
          src="/ntu-im.png"
          alt=""
          width={200}
          height={100}
          className="max-w-[70%] max-h-[30%] object-contain"
        />
      </div>
      <div className="w-1/2 h-full bg-white flex items-center justify-center overflow-auto">
        <TextCard className="overflow-y-auto">
          <span className="text-2xl font-bold">Skills</span>

          <ul className="list-disc ml-6">
            <li>
              <strong>Programming Language:</strong> C/C++, Python,
              JavaScript/TypeScript, HTML/CSS, C#, SQL, LaTeX
            </li>
            <li>
              <strong>Web/Native App Development:</strong> React, React Native,
              GraphQL, Node.js, Next.js, REST API, Tailwind CSS
            </li>
            <li>
              <strong>Text Mining:</strong> NLTK, scikit-learn, Understand the
              principles of various models, e.g. Naive Bayes, KNN.
            </li>
            <li>
              <strong>Game Programming:</strong> Unity
              <strong>Database:</strong> PostgreSQL
              <strong>Statistic:</strong> Pandas, Numpy, Statsmodels, SciPy
            </li>
            <li>
              <strong>Other:</strong> Git/GitHub, Git Flow, WSL, Socket
              Programming
            </li>
            <li>
              <strong>English:</strong> TOEIC golden certificate (950/990)
            </li>
          </ul>
        </TextCard>
      </div>
    </div>
  );
}
