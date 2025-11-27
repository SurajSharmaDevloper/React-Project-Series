import React, { useState } from "react";
import Bredcrumb from "../../components/layout/Bredcrumb";
import InputBox from "../../components/base/InputBox";
import FileInput from "../../components/base/FileInput";
import Button from "../../components/base/Button";
import Card from "../../components/base/Card";

const AddNewDealer = () => {
  const [isGstHolder, setIsGstHolder] = useState(false);

  return (
    <Card>
      <div className="text-xl font-semibold text-primary mt-2">
        <Bredcrumb heading="Add New Dealer" page="Add New Dealer" />
      </div>
      <div className="px-5">
        <div className="p-5 rounded-2xl bg-light">
          <div className="flex gap-5 w-full max-[650px]:flex-col items-center">
            <div className="w-full">
              <InputBox
                label="Dealership Name"
                placeholder="Enter Dealership Name"
              />
            </div>
            <div className="w-full">
              <InputBox
                label="Dealership Mobile No"
                placeholder="Enter Mobile No"
              />
            </div>
          </div>
          <div className="flex gap-5 mt-3 w-full max-[650px]:flex-col items-center">
            <div className="w-full">
              <InputBox
                label="Dealership Manufaturing"
                placeholder="Enter Dealership Manufaturing"
              />
            </div>
            <div className="w-full">
              <InputBox
                label="Dealership Address"
                placeholder="Enter Dealership Address"
              />
            </div>
          </div>
          <div className="flex gap-5 mt-3 w-full max-[650px]:flex-col items-center">
            <div className="w-full">
              <InputBox
                label="Dealership City"
                placeholder="Enter Dealership City"
              />
            </div>
            <div className="w-full">
              <InputBox
                label="Dealership RTO"
                placeholder="Enter Dealership RTO"
              />
            </div>
          </div>
          <div className="flex gap-5 mt-3 w-full max-[650px]:flex-col items-center">
            <div className="w-full">
              <FileInput label="Upload PAN Card" />
            </div>
            <div className="w-full">
              <InputBox
                label="Dealership PAN Number"
                placeholder="Enter PAN Number"
              />
            </div>
          </div>
          <div className="w-full flex mt-3 gap-5 max-[650px]:flex-col items-center">
            <div className="w-full">
              <InputBox
                label="Dealership Type"
                placeholder="Enter Dealership Type"
              />
            </div>
            <div className="w-full">
              <InputBox
                label="Dealership State"
                placeholder="Enter Dealership State"
              />
            </div>
          </div>
          <div className="w-full mt-3 flex gap-5 max-[650px]:flex-col items-center">
            <div className="w-full">
              <InputBox
                label="Dealership Owner Name"
                placeholder="Enter Owner Name"
              />
            </div>
            <div className="w-full">
              <InputBox
                label="Sales Manager"
                placeholder="Enter Sales Manager Name"
              />
            </div>
          </div>
          <div className="w-full mt-3 flex gap-5 max-[650px]:flex-col items-center">
            <div className="w-full">
              <InputBox
                label="Dealership Executive Name"
                placeholder="Enter Executive Name"
              />
            </div>
            <div className="w-full">
              <InputBox
                label="Dealer Owner Mobile No"
                placeholder="Enter Owner Mobile No"
              />
            </div>
          </div>
          <div className="w-full mt-3 flex gap-5 max-[650px]:flex-col items-center">
            <div className="w-full">
              <InputBox
                label="Dealership Email"
                placeholder="Enter Dealership Mail"
              />
            </div>
            <div className="w-full">
              <InputBox
                label="Dealership Executive Mobile No"
                placeholder="Enter Executive Mobile No"
              />
            </div>
          </div>
          <div className="w-full mt-3 flex gap-5 max-[650px]:flex-col items-center">
            <div className="w-full">
              <InputBox
                label="Dealership Account Holder Name"
                placeholder="Enter Dealership Account Name"
              />
            </div>
            <div className="w-full">
              <InputBox
                label="Dealership Account No"
                placeholder="Enter Account No"
              />
            </div>
          </div>
          <div className="w-full mt-3 flex gap-5 max-[650px]:flex-col items-center">
            <div className="w-full">
              <InputBox
                label="Dealership Bank Name"
                placeholder="Enter Dealership Bank Name"
              />
            </div>
            <div className="w-full">
              <InputBox label="Payment Terms" placeholder="Enter Payment Terms" />
            </div>
          </div>
          <div className="w-full mt-3 flex gap-5 max-[650px]:flex-col items-center">
            <div className="w-full">
              <InputBox label="Dealer IFSC Code" placeholder="Enter IFSC Code" />
            </div>
            <div className="w-full">
              <FileInput label="Upload Photo" />
            </div>
          </div>
          <div className="w-full mt-3 flex gap-5 max-[650px]:flex-col items-center">
            <div className="w-full ps-1">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Are you GST Holder?
              </label> {/* RADIO OPTIONS */}
              <div className="flex gap-6 pl-1 mb-2">
                <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
                  <input
                    type="radio"
                    name="gstHolder"
                    value="yes"
                    onChange={() => setIsGstHolder(true)}
                    className="cursor-pointer"
                  />
                  Yes
                </label>

                <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
                  <input
                    type="radio"
                    name="gstHolder"
                    value="no"
                    onChange={() => setIsGstHolder(false)}
                    className="cursor-pointer"
                  />
                  No
                </label>
              </div>
            </div>
            <div className="w-full">
              {isGstHolder && (
                <InputBox
                  label="Dealership Executive GST No"
                  placeholder="Enter GST No"
                />
              )}
            </div>

          </div>

          <div className="w-full my-5 flex justify-end">
            <Button>Submit</Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AddNewDealer;
