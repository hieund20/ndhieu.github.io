import React from "react";
import { WorkExperiences } from "../components";
import IResumeData from "../models/resume-data.model";
import Skill from "../components/skill";
import Education from "../components/education";

export interface IResumeBodyProps {
  resumeData: IResumeData;
}

const ResumeBody: React.FC<IResumeBodyProps> = (props) => {
  const { resumeData } = props;

  return (
    <div className="resume-body">
      <div className="row">
        <div className="col-9">
          <WorkExperiences workExperiences={resumeData.workExperiences} />
        </div>
        <div className="col-3">
          <Skill skill={resumeData.skill} />
          <Education educations={resumeData.educations} />
        </div>
      </div>
    </div>
  );
};

export default ResumeBody;
