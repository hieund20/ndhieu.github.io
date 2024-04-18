import React from "react";
import {
  Education,
  Languages,
  Projects,
  Skill,
  WorkExperiences,
} from "../components";
import IResumeData from "../models/resume-data.model";
import Interests from "../components/interests";

export interface IResumeBodyProps {
  resumeData: IResumeData;
}

const ResumeBody: React.FC<IResumeBodyProps> = (props) => {
  const { resumeData } = props;

  return (
    <div className="resume-body">
      <div className="row">
        <div className="resume-main col-9">
          <WorkExperiences workExperiences={resumeData.workExperiences} />
          <Projects projects={resumeData.projects} />
        </div>
        <div className="resume-aside col-3">
          <Skill skill={resumeData.skill} />
          <Education educations={resumeData.educations} />
          <Languages languages={resumeData.languages} />
          <Interests interests={resumeData.interests} />
        </div>
      </div>
    </div>
  );
};

export default ResumeBody;
