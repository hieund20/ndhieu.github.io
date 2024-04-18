import React from "react";
import { ResumerHeader } from "./layout";
import IResumeData from "./models/resume-data.model";
import ResumeIntro from "./layout/resume-intro";

export interface IResumeProps {
  data: IResumeData;
}

const Resume: React.FC<IResumeProps> = ({ data }) => {
  return (
    <div className="bg-white">
      <div className="container">
        <ResumerHeader personalInformation={data.personalInformation} />
        <hr />
        <ResumeIntro summary={data.summary} />
      </div>
    </div>
  );
};

export default Resume;
