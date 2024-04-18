import React from "react";

export interface IProfileImageProps {
  src: string | undefined;
}

const ProfileImage: React.FC<IProfileImageProps> = (props) => {
  return (
    <img
      className="resume-profile-image rounded"
      src={props.src}
      alt="profile"
    />
  );
};

export default ProfileImage;
