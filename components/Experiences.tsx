import Image from "next/image";
import TextCard from "./TextCard";

export default function Experiences() {
  interface ProjectProps {
    name: string;
    link: string;
    tech: string;
    duration: string;
    children: React.ReactNode;
  }

  const Project: React.FC<ProjectProps> = ({
    name,
    link,
    tech,
    duration,
    children,
  }) => (
    <div className="my-2 w-full">
      <div className="w-full">
        <a className="font-bold hover:text-my-primary hover:animate-pulse" href={link}>
          {name}
        </a>{" "}
        | <span className="float-right">{duration}</span>
      </div>
      <div className="w-full">
        <i className="text-sm">{tech}</i>
      </div>
      <ul>{children}</ul>
    </div>
  );

  return (
    <div className="w-full h-full flex flex-wrap  items-center justify-center">
      <div className="h-1/2 w-full sm:w-1/2 sm:h-full bg-white flex items-center justify-center overflow-auto">
        <TextCard className="overflow-y-auto">
          <span className="text-2xl font-bold text-my-primary-dark">Skills</span>

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
            </li>
            <li>
              <strong>Database:</strong> PostgreSQL, MongoDB, Firebase, Supabase
            </li>
            <li>
              <strong>Statistic:</strong> Pandas, Numpy, Statsmodels, SciPy
            </li>
            <li>
              <strong>Deep Learning:</strong> PyTorch
            </li>
            <li>
              <strong>Computer Vision:</strong> OpenCV
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

      <div className="h-1/2 w-full sm:w-1/2 sm:h-full bg-white flex items-center justify-center">
        <TextCard>
          <span className="text-2xl font-bold text-my-primary-dark">Projects</span>
          <Project
            name="GoSurvey"
            link="https://youtu.be/gL0HDOxsVYM?si=vkzwavejb4LTdxUK"
            tech="React, Node.js, Apollo-client, Mongoose, GraphQL, MUI"
            duration="Dec 2022 - Jan 2023"
          >
            <li>
              The platform provides a place where people can create surveys and
              fill out others surveys. The concept is similar with social media,
              but posts are replaced by surveys.
            </li>
          </Project>

          <Project
            name="Operation Research"
            link="https://www.youtube.com/watch?v=u6-2RUhrxqI"
            tech="Gurobi optimizer"
            duration="May 2023 - Jun 2023"
          >
            <li>
              Developed an Integer Program and heuristic algorithm to optimize
              room assignment for a club trip, considering gender preferences,
              budget limitations, and member happiness, showcasing substantial
              improvement over a simple heuristic approach and potential for
              further refinement.
            </li>
          </Project>

          <Project
            name="RPG Game"
            link="https://youtu.be/60klMe81oc8?si=WkCYzjX5jcEyxevK"
            tech="2D top down RPG with Unity"
            duration="Sep 2023 - Dec 2023"
          >
            <li>
              {"A 2D RPG game base on NTU's campus. Players take on the role of a new student who finds themselves in a crisis on the challenging campus of National Taiwan University (NTU)."}
            </li>
            <li>
              Key features of the game include freely exploring the NTU campus,
              completing quests, engaging in battles with NPCs and creatures.
            </li>
          </Project>

          <Project
            name="Event Master"
            link="https://youtu.be/DLcX8GOV6gg"
            tech="React, Node.js, FastAPI, PostgreSQL, Schema Design, Google OAuth"
            duration="Oct 2023 - Dec 2023"
          >
            <li>
              A website that aims to help people easily schedule events. User in
              a group can propose an event, and then other members can select
              feasible time slots. System will remind user which time is already
              scheduled by other event.
            </li>
            <li>
              We use PostgreSQL as our database, and put many efforts on ER
              diagram, normalization, indexing, etc.
            </li>
          </Project>

          <Project
            name="Socket Programming"
            link="https://github.com/ansonWuuuuu/Socket-Programming"
            tech="Linux socket API, OpenSSL, multithreaded"
            duration="Nov 2023 - Dec 2023"
          >
            <li>
              A Secure P2P Micropayment System. Use OpenSSL to implement
              asymmetric encryption.
            </li>
          </Project>

          <Project
            name="AI text detection"
            link="https://youtu.be/MPrLKdJxRPQ"
            tech="scikit-learn"
            duration="Dec 2023"
          >
            <li>
              Various models including Multinomial Naive Bayes, Logistic
              Regression, kernel SVM (RBF and Linear), recurrent neural network
              (RNN), and ensemble methods were explored and evaluated using
              metrics such as precision, recall, F1 score, and AUC ROC.
            </li>
          </Project>

          <Project
            name="RiddleCity - NTU Art Fest 29th"
            link="https://riddlecity.ntuartfest.com/"
            tech="React, Next.js, Vercel, Supabase, Google OAuth"
            duration="Jan 2024 - May 2024"
          >
            <li>
              RiddleCity is one of the events of NTU Art Fest 29th. It is a web
              app for people to explore our campus. There will be many missions
              and clues, either physical or on the app. Users has to scan QR
              code and answer question on the website.
            </li>
            <li>
              {"NTU Art Fest has a quite large organizing team. It's a great experience to learn how a bigger organization works and how to cooperate with students from all kinds of departments."}
            </li>
          </Project>

          <span className="text-2xl font-bold text-my-primary-dark">Internship</span>
          <Project
            name="Taishin Bank - Software Engineer Intern"
            link="https://www.taishinbank.com.tw/"
            tech="架構部架構規劃組"
            duration="Jul 2024 - July 2025"
          >
            <></>
          </Project>
        </TextCard>
      </div>
    </div>
  );
}
