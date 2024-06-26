import React from "react";
import IProject from "../models/project.model";
import github from "../assets/images/github.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Projects: React.FC<{ projects: Array<IProject> }> = ({ projects }) => {
  return (
    <section className="project-section py-3">
      <h3 className="text-uppercase resume-section-heading mb-4">Personal Projects</h3>
      {projects.map((project, idx) => {
        return (
          <div key={idx} className="item mb-3">
            <div className="row item-heading align-items-center mb-2">
              <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                {project.name}
              </h4>
              <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">
                {project.type}
              </div>
            </div>
            <div className="item-content">
              <p>{project.time}</p>
              <p>{project.description}</p>
              <p className={"text-muted"}>Technology: {project.technology}</p>
              {project.github && (
                <p>
                  <span className={"me-2"}>
                    <img src={github} alt={"github"} width={15} />
                  </span>
                  Github:{" "}
                  <a href={project.github} target={"_blank"}>
                    {project.github}
                  </a>
                </p>
              )}
              {project.link && (
                <p>
                  <span className={"me-2"}>
                    <FontAwesomeIcon icon={faGlobe} fixedWidth />
                  </span>
                  Link:{" "}
                  <a href={project.link} target={"_blank"}>
                    {project.link}
                  </a>
                </p>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Projects;
