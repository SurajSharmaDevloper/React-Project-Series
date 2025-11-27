import React from "react";
import userIcon from "../../assets/Icons/new_user.png";

const ProfileIcon = () => {
  return (
    <div>
      <img
        className="w-10 h-10 rounded-full bg-primary p-1 object-cover mx-auto"
        src={userIcon}
        alt="user_img"
      />
    </div>
  );
};

export default ProfileIcon;
