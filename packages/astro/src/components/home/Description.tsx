import Socials from "../footer/Socials";

import logo from "@/img/logo.min.svg";
import { SITE_TITLE } from "@/consts";

export default function Description() {
  return (
    <div className="mx-auto max-w-max">
      <h1 className="text-6xl font-bold py-4 text-white">
        <div className="flex flex-wrap items-center">
          <img
            src={logo.src}
            alt=""
            className="inline pr-4 w-20 h-auto"
            width={logo.width}
            height={logo.height}
          />
          <span className="text-[#fffaf1]">{SITE_TITLE}</span>
        </div>
      </h1>
      <div className="p-2 max-w-max">
        <Socials />
      </div>
      <div className="text-2xl text-[#fff6e5] text-justify max-w-160 space-y-3 py-4">
        <p>I&apos;m a software engineer with a background in marketing.</p>
        {/* <p>
          I specialize in full stack web development and data analysis.
          I&apos;m also casually into mobile app development, DevOps and systems programming.
        </p> */}
        <p>Here are some personal interests of mine at the moment:</p>
        <ul className="list-disc list-inside">
          <li>
            Computational linguistics, lexical analyzers and parser generators{" "}
          </li>
          <li>Theorem provers, logic, and formal verification </li>
          <li>
            Mathematical optimization, symbolic computation, and applied linear
            algebra{" "}
          </li>
          <li>
            Asynchronous runtimes and concurrency (i.e. fibers, continuations,
            work stealing, distributed systems...){" "}
          </li>
          <li>
            Finance, econometrics, operations research and monetary policies{" "}
          </li>
          {/* <li>Cybersecurity </li> */}
        </ul>
      </div>
    </div>
  );
}
