import React from "react";
import IPersonalInformation from "../models/personal-information.model";
import {
  faEnvelopeSquare,
  faGlobe,
  faMapMarker,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface IResumeHeaderProps {
  personalInformation: IPersonalInformation;
}

const ResumerHeader: React.FC<IResumeHeaderProps> = (props) => {
  return (
    <div className="resume-header">
      <div className="row align-items-center">
        <div className="resume-title col-9">
          <h2 className="resume-name mb-0 text-uppercase">
            {props.personalInformation?.fullName}
          </h2>
          <div className="resume-tagline mb-3">
            {props.personalInformation?.jobTitle}
          </div>
        </div>
        <div className="resume-contact col-3">
          <ul>
            <li>
              <FontAwesomeIcon icon={faPhoneSquare} />{" "}
              {props.personalInformation?.phoneNumber}
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelopeSquare} />{" "}
              <a href={props.personalInformation?.email}>
                {props.personalInformation?.email}
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faGlobe} />{" "}
              <a href={props.personalInformation?.website}>
                {props.personalInformation?.website}
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faFacebookF} />
              <a href={props.personalInformation?.facebook}>
                {props.personalInformation?.facebook}
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faMapMarker} />{" "}
              {props.personalInformation?.address}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResumerHeader;
