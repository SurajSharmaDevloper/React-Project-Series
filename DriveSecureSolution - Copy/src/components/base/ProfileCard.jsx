import React from "react";
import User_img from "../../assets/media/image.png";

const ProfileCard = ({ dealerName, url = User_img }) => {
  return (
    <>
      <div className=" flex justify-center items-center flex-col ">
        <div className="w-50 h-50 bg-amber-200 p-1 rounded-2xl flex justify-center items-end">
          <img
            className="w-full h-full bg-red-200 rounded-2xl "
            src={url}
            alt="user"
          />
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
