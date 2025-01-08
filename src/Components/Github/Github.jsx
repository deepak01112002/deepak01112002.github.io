import React from "react";
import "./Github.css"
import GitHubCalendar from 'react-github-calendar';
import { FaCode, FaGit } from 'react-icons/fa';
import { RiLightbulbFlashLine } from 'react-icons/ri';
import { BiUserVoice } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { VscGraph } from "react-icons/vsc";

function Github() {
  return <div id="main-github">
    <h1>Github</h1>
    <br></br>
    <div data-aos="fade-right" className="react-activity-calendar">
    <GitHubCalendar blockSize={18} showWeekdayLabels={true} username="deepak01112002"      /> 
    </div>
    <br></br>
    <div data-aos="fade-right" className="github-description">
        <p><span><FaCode/></span> &nbsp; 1100+ Hours Practical Coding</p>
        <p> <span><RiLightbulbFlashLine/></span> &nbsp; 250+ Hours Data Structures & Algorithms</p>
        <p> <span><BiUserVoice/></span> &nbsp; 100+ Hours Soft Skill Development</p>
        <p> <span><AiOutlineFundProjectionScreen/></span> &nbsp; 4+ Projects</p>
        <p> <span><VscGraph/></span> &nbsp; 10+ Mini Projects</p>
        <p> <span><FaGit/></span> &nbsp; 300+ Git Commits</p>
    </div>
    <br></br>
    <br></br>
    <div data-aos="fade-right" className="git-statistics">
         <div>
            <img id="github-streak-stats" width="100%" height="100%" src="https://github-readme-streak-stats.herokuapp.com?user=deepak01112002&theme=merko&hide_border=true&type=png)](https://git.io/streak-stats"/>
         </div>
         <div>
           <img id="github-top-langs" width="100%" height="100%" src="https://github-readme-stats.vercel.app/api/top-langs/?username=deepak01112002&theme=merko&hide_border=true&hide_progress=true"/>
         </div>
         <div>
         <img id="github-stats-card" width="100%" height="100%" src="https://github-readme-stats.vercel.app/api?username=deepak01112002&theme=merko&&hide_border=true&hide=contribs,prs"/> 
         </div>
    </div>
  </div>;
}

export default Github;
