import React from "react";
import FileInput from "../../components/base/FileInput";
import InputBox from "../../components/base/InputBox";
import Button from "../../components/base/Button";
import Bredcrumb from "../../components/layout/Bredcrumb";
import Card from "../../components/base/Card";
import DropdownBox from "../../components/base/DropdownBox";
const NewInsurance = () => {
  return (
    <Card>
      <div className="text-xl font-semibold text-primary mt-2">
        <Bredcrumb />
      </div>

      <div className="px-5 py-2 ">
        {/* Document Uploads */}
        <div className="grid rounded-xl px-5 py-4 bg-light grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <FileInput
            label="Upload Aadhaar Front"
            required
            onChange={(e) => e.preventDefault()}
          />
          <FileInput
            label="Upload Aadhaar Back"
            required
            onChange={(e) => e.preventDefault()}
          />
          <FileInput
            label="Upload PAN Card"
            required
            onChange={(e) => e.preventDefault()}
          />
          <FileInput
            label="Upload Invoice"
            required
            onChange={(e) => e.preventDefault()}
          />
        </div>
        <div className="mb-6 ">
          <h3 className="text-lg px-4 font-semibold text-gray-800 ">
            Vehical Details
          </h3>
          <hr className="mb-4 text-muted" />
          <div className="space-y-4 rounded-xl px-5 py-4 bg-light">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <DropdownBox
                label="Vehical Type"
                required
                placeholder="Select Vehical Type"

                options={[
                  { label: "Motorcycle", value: "motorcycle" },
                  { label: "Scooter", value: "scooter" },
                  { label: "Other", value: "other" },
                ]}
              />
              <DropdownBox
                label="Vehical Capacity (In CC)"
                required
                placeholder="Select Vehical Capacity (In CC)"

                options={[
                  { label: "Scooter upto 150CC", value: "LessThan150" },
                  { label: "Scooter above 150CC", value: "150cc" },
                  { label: "Bikes upto 150CC", value: "Between150ccTo350cc" },
                  { label: "Bike 150CC to 350CC", value: "MoreThan350cc" },
                  { label: "Bikes above 350CC", value: "MoreThan350cc" },
                  { label: "EV", value: "MoreThan350cc" }
                ]}
              />
            </div>
          </div>
        </div>

        {/* Nominee Details */}
        <div className="mb-6 ">
          <h3 className="text-md px-4 font-semibold text-gray-800 ">
            Nominee Details
          </h3>
          <hr className="mb-4 text-muted" />
          <div className="space-y-4 rounded-xl px-5 py-4 bg-light">
            <InputBox
              placeholder="Enter Nominee Name"
              label="Nominee Name"
              required
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <InputBox
                placeholder="Enter Nominee Age"
                required
                label="Nominee Age"
              />
              <InputBox
                placeholder="Enter Relation (e.g., Spouse, Son, Daughter)"
                required
                label="Nominee Relation"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4 border-t border-gray-700 mb-5 flex justify-end">
          <Button
            className="bg-[#e36e53] hover:bg-[#d45f46] active:ring-2 active:ring-[#e36e53]/50 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200"
            size="small"
            variant="primary"
          >
            Submit
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default NewInsurance;
