import React from "react";
import {
  ResumerBody,
  ResumerHeader,
  ResumeIntro,
  ResumeFooter,
  LicenseFooter
} from "./layout";
import IResumeData from "./models/resume-data.model";

export interface IResumeProps {
  data: IResumeData;
}

const Resume: React.FC<IResumeProps> = ({ data }) => {
  return (
    <div className="main-wrapper bg-white">
      <div className="resume container mb-5">
        <ResumerHeader personalInformation={data.personalInformation} />
        <hr />
        <ResumeIntro summary={data.summary} />
        <hr />
        <ResumerBody resumeData={data} />
        <hr />
      </div>
      <ResumeFooter link={data.github} />
      <LicenseFooter />
    </div>
  );
};

export default Resume;
