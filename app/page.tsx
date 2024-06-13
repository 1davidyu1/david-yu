import { Work } from "./components/work"
import { WorkData, ProjectData } from "../data/work-data"
import { Project } from "./components/project";

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

  const projectMap = ProjectData.map((project, index) => (
    <Project 
      key={index}
      name={project.name}
      url={project.url}
      description={project.description}
    />
  ))

  return (
    <div className="gap-y-8 grid">
      <div className="text-lg text-neutral-700">
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
        <div className="mt-2 grid grid-cols-2 gap-3">
          {projectMap}
        </div>
      </div>
      <div className="text-lg">
        Writings
      </div>
    </div>
  );
}
