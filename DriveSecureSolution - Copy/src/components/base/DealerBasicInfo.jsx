import React from "react";
import userImg from "../../assets/media/UserImg.png";
import users from "../../assets/media/users-img.png"

const DealerBasicInfo = ({ data, UserImg = userImg }) => {
    if (!data) return null;

    // Keys you don't want to show as text (like avatar)
    const hiddenFields = ["avatar", "img", "photo"];

    return (
        <div className="bg-white rounded-lg shadow-md border border-gray-200">
            {/* HEADER */}
            <div className="bg-[#d8654a] text-white font-semibold py-2 px-6 rounded-t-lg">
                Basic Info
            </div>

            {/* BODY */}
            <div className="flex gap-10 p-6 max-[1140px]:flex-col max-[1064px]:flex-row max-[880px]:flex-col">
                {/* Avatar */}
                <div className="shrink-0 w-32 h-32 rounded-2xl bg-amber-300">
                    <img
                        src={users}
                        alt="profile avatar"
                        className=" shadow-sm object-cover rounded-2xl"
                    />
                </div>

                {/* Details */}
                <div className="flex max-[698px]:flex-col" >
                    <div className="flex flex-col gap-2 w-full">
                        <div>
                            <p className="text-secondary text-sm">
                                <span className="font-semibold">Name:</span>{" "}
                                Subansiri Enterprise
                            </p>
                        </div>
                        <div>
                            <p className="text-secondary text-sm">
                                <span className="font-semibold">Dealer Id:</span>{" "}
                                1234
                            </p>
                        </div>
                        <div>
                            <p className="text-secondary text-sm">
                                <span className="font-semibold">Mobile No:</span>{" "}
                                9871067945
                            </p>
                        </div>
                        <div>
                            <p className="text-secondary text-sm">
                                <span className="font-semibold">Email:</span>{" "}
                                Subhansiribajaj@gmail.com
                            </p>
                        </div>
                        <div>

                            <p className="text-secondary text-sm">
                                <span className="font-semibold">Location:</span>{" "}
                                North Lakhimpur, Assam
                            </p>
                        </div>
                        <div>
                            <p className="text-secondary text-sm">
                                <span className="font-semibold">Address:</span>{" "}
                                Bantow bangali, NH-15, North Lakhimpur - 787031
                            </p>
                        </div>


                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <div>
                            <p className="text-secondary text-sm">
                                <span className="font-semibold">Manufacturer: </span>{" "}
                                Bajaj
                            </p>
                        </div>
                        <div>
                            <p className="text-secondary text-sm">
                                <span className="font-semibold">RTO:</span>{" "}
                                AS07
                            </p>
                        </div>
                        <div>
                            <p className="text-secondary text-sm">
                                <span className="font-semibold">Type:</span>{" "}
                                Dealer
                            </p>
                        </div>
                        <div>
                            <p className="text-secondary text-sm">
                                <span className="font-semibold">Sales Manager:</span>{" "}
                                Bhaben
                            </p>
                        </div>
                        <div>
                            <p className="text-secondary text-sm">
                                <span className="font-semibold">Owner Name:</span>{" "}
                                Avinash Kumar Singh
                            </p>
                        </div>
                        <div>
                            <p className="text-secondary text-sm">
                                <span className="font-semibold">Executive Name:</span>{" "}
                                Bhaben
                            </p>
                        </div>
                        <div>
                            <p className="text-secondary text-sm">
                                <span className="font-semibold">Executive Mobile:</span>{" "}
                                9853047940
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DealerBasicInfo;
