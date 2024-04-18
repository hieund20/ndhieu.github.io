import IPersonalInformation from "./personal-information.model";

export default interface IResumeData {
    personalInformation: IPersonalInformation,
    summary: string,
    // workExperiences: Array<IWorkExperience>,
    // projects: Array<IProject>,
    // skill: ISkill,
    // educations: Array<IEducation>,
    // awards: Array<IAward>,
    // languages: Array<ILanguage>,
    // interests: Array<string>,
    // github: string
}