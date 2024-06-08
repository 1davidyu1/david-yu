import { Work } from "./components/work"
import { WorkData } from "../data/work-data"

export default function Home() {

  const workMap = WorkData.map((work, index) => (
    <Work 
      key={index}
      logo={work.logo}
      url={work.url}
      company={work.company}
      role={work.role}
      period={work.period}
    />
  ))

  return (
    <div className="gap-y-8 grid">
      <div className="text-lg text-slate-700">
        <p>blah blah</p>
        <br />
        <p>blah blah</p>
        <br />
        <p>blah blah</p>
        <br />
        <p>blah blah</p>
        <br />
        <br />
      </div>
      <div className="text-lg">
        Work
        <div className="mt-2 border-b border-dashed">
          {workMap}
        </div>
      </div>
      <div className="text-lg">
        Projects
      </div>
      <div className="text-lg">
        Writings
      </div>
    </div>
  );
}
