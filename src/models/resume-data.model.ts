import IEducation from "./education.model";
import ILanguage from "./language.model";
import IPersonalInformation from "./personal-information.model";
import IProject from "./project.model";
import ISkill from "./skill.model";
import { IWorkExperience } from "./work-experience.model";

export default interface IResumeData {
  personalInformation: IPersonalInformation;
  summary: string;
  workExperiences: Array<IWorkExperience>;
  projects: Array<IProject>,
  skill: ISkill;
  educations: Array<IEducation>;
  // awards: Array<IAward>,
  languages: Array<ILanguage>,
  interests: Array<string>,
  github: string
   //Thêm các chứng chỉ: Amazon, Udemy
}
