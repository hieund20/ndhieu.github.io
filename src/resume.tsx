import React from "react";
import { ResumerBody, ResumerHeader } from "./layout";
import IResumeData from "./models/resume-data.model";
import ResumeIntro from "./layout/resume-intro";

export interface IResumeProps {
  data: IResumeData;
}

const Resume: React.FC<IResumeProps> = ({ data }) => {
  return (
    <div className="main-wrapper bg-white">
      <div className="resume-main container">
        <ResumerHeader personalInformation={data.personalInformation} />
        <hr />
        <ResumeIntro summary={data.summary} />
        <hr />
        <ResumerBody resumeData={data} />
      </div>
    </div>
  );
};

export default Resume;
