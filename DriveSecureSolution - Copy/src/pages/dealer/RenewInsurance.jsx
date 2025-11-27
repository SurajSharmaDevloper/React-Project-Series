import React from "react";
import FileInput from "../../components/base/FileInput";
import InputBox from "../../components/base/InputBox";
import Button from "../../components/base/Button";
import Bredcrumb from "../../components/layout/Bredcrumb";
import Card from "../../components/base/Card";

const RenewInsurance = () => {
  return (
    <Card>
      {/* Breadcrumb */}
      <div className="text-xl font-semibold text-primary mt-2">
        <Bredcrumb heading="Renew Your Policy" page="Renew Insurance" />
      </div>

      {/* Content */}
      <div className="px-5 py-2">
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
            label="Upload Previous Insurance"
            required
            onChange={(e) => e.preventDefault()}
          />
          <FileInput
            label="Upload RC"
            required
            onChange={(e) => e.preventDefault()}
          />
        </div>

        {/* Nominee Details */}
        <div className="mb-6">
          <h3 className="text-lg px-5 font-semibold text-gray-800">
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
        <div className="pt-4 border-t mb-5 border-muted flex justify-end">
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

export default RenewInsurance;
