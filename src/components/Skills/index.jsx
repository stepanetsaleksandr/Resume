import { IoLogoJavascript, IoLogoSass } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiJson,
  SiCss3,
  SiHtml5,
  SiRedux,
  SiReactrouter,
  SiWebpack,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { BsBraces } from "react-icons/bs";
import { MdHttp } from "react-icons/md";
import { DiScrum, DiResponsive } from "react-icons/di";
import { BiCodeBlock } from "react-icons/bi";
import { MdOutlineImportantDevices } from "react-icons/md";

function Skills() {
  const icons = [
    <FaReact />,
    <SiJavascript />,
    <IoLogoJavascript />,
    <SiJson />,
    <BsBraces />,
    <MdHttp />,
    <SiHtml5 />,
    <SiCss3 />,
    <IoLogoSass />,
    <SiRedux />,
    <SiReactrouter />,
    <SiWebpack />,
    <SiGit />,
    <SiGithub />,
    <DiScrum />,
    <BiCodeBlock />,
    <DiResponsive />,
    <MdOutlineImportantDevices />,
  ];
  const skills = [
    "React",
    "Next.js",
    "JavaScript ES6+",
    "JSON",
    "REST API",
    "HTTP protocol",
    "HTML5",
    "CSS3",
    "SASS(SCSS)",
    "Redux",
    "React-Router",
    "Webpack",
    "Git",
    "GitHub",
    "Scrum",
    "BEM methodology",
    "Responsive design",
    "Multi-device layouts",
  ];

  return (
    <div className='left-block m-2 p-2 border border-warning rounded-3 shadow-sm'>
      <h6>Skills</h6>
      <ul className='list-group '>
        {skills.map((skill, index) => (
          <li
            className='list-group-item py-1 d-flex  align-items-center border-0 fw-lighter'
            key={index}
          >
            {icons[index]} {"..."} {skill}
          </li>
        ))}
        {/* {skills.map((skill, ) => (
          <li class='list-group-item  py-1 d-flex justify-content-between align-items-center border-0'>
            {skill}
          </li>
        ))} */}
      </ul>
    </div>
  );
}

export default Skills;
