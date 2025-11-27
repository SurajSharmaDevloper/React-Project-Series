import React from "react";
import { ChevronDown } from "lucide-react";
import users from "../../assets/media/UserImg.png"
import InputBox from "../base/InputBox"
const ProfileNewDetails = () => {
    return (
        <div className="w-full max-w-6xl p-6 sm:p-10 bg-light rounded-xl border border-gray-200 shadow-sm">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <img
                        src={users}
                        alt="avatar"
                        className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                        <h2 className="font-semibold text-xl text-gray-800">Subansiri Enterprises</h2>
                        <p className="text-gray-500 text-sm">Subhansiribajaj@gmail.com</p>
                    </div>
                </div>

            </div>
            <hr className="text-muted mb-10" />

            {/* Form Section */}
            <div className="grid sm:grid-cols-2 gap-6">
                <div>
                    <InputBox label="Account Holder Name :"
                  value="Subansiri Enterprises" readOnly />
                </div>

                <div>
                    <InputBox label="Bank Name :" value="State Bank of India" readOnly />
                </div>

                <div>
                    <InputBox label="Account Number :" value="44559845402"  readOnly />
                </div>

                <div>
                    <InputBox label="Account IFSC Code :" value="SBIN0063813" readOnly />
                </div>

                <div>
                    <InputBox label="Payment Type :" value="Cut & Pay" readOnly />
                </div>

                <div>
                    <InputBox label="PAN Card No :" value="AS8900TY" readOnly />
                </div>
                <div>
                    <InputBox label="RTO :" value="AS07" readOnly />
                </div>
                <div>
                    <InputBox label="GST No :" value="18ASTYJ08YH76"  readOnly />
                </div>
                <div>
                    <InputBox label="Payment Terms :" value="Cut & Pay" readOnly />
                </div>
               
            </div>
        </div>
    );
};

export default ProfileNewDetails;

