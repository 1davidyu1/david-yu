import { Work } from "./components/work"
import { Project } from "./components/project";
import { Writing } from "./components/writing";
import { WorkData, ProjectData, WritingData } from "../data/data"

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

  const writingMap = WritingData.map((writing, index) => (
    <Writing 
      key={index}
      image={writing.image}
      title={writing.title}
      url={writing.url}
      description={writing.description}
    />
  ))

  return (
    <div className="gap-y-8 grid">
      <div className="text-lg text-gray-700">
        <p>This is an unfinished portfolio, quickly created to later add valuable info, share ideas, link in my resume, and document my journey.</p>        {/* <br />
        <p>blah blah</p>
        <br />
        <p>blah blah</p>
        <br />
        <p>blah blah</p> */}
        {/* <br /> */}
        <br />
      </div>
      <div className="text-lg">
        Work
        <div className="mt-2 border-b border-gray-300 border-dashed">
          {workMap}
        </div>
      </div>
      <div className="text-lg">
        Projects
        <div className="mt-2 grid border-gray-300 grid-cols-2 gap-3">
          {projectMap}
        </div>
      </div>
      <div className="text-lg">
        Writings
        <div className="mt-2 border-b border-gray-300 border-dashed">
          {writingMap}
        </div>
      </div>
    </div>
  );
}
