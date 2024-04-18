import React from "react";
// import { ProfileImage } from "../component";
// import resumeProfile from "../assets/images/resume-profile.jpg";

const ResumeIntro: React.FC<{ summary: string }> = ({ summary }) => {
  return (
    <div className="resume-intro">
      <div className="row align-items-center">
        <div className="col-12">
          {/* <ProfileImage src={resumeProfile} /> */}
        </div>
        <div className="col-12">
          <p className="mb-0">{summary}</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeIntro;
