import React from "react";
import Bredcrumb from "../../components/layout/Bredcrumb";
import Button from "../../components/base/Button";
import InputBox from "../../components/base/InputBox";
import FileInput from "../../components/base/FileInput";

const Endorsement = () => {
  return (
    <section className="min-h-screen w-full bg-surface p-5 flex justify-center">
      <div className="w-full  bg-[#00000012] rounded-2xl shadow-xl border border-muted">
        {/* Breadcrumb Header */}
        <div className="text-xl font-semibold text-primary mt-2">
          <Bredcrumb heading="Endorsement" page="Endorsement" />
        </div>

        {/* Form Section */}
        <div className="px-4">
          <div className="px-4 py-6 bg-[#fff9f9] rounded-xl">
            {/* Remarks + Dealer Letter */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <InputBox required placeholder="Enter Remarks" label="Remarks" />
              <FileInput required label="Upload Dealer Letter" />
            </div>

            {/* Aadhaar Uploads */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <FileInput required label="Upload Aadhaar Front" />
              <FileInput required label="Upload Aadhaar Back" />
            </div>

            {/* PAN & Policy Uploads */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <FileInput required label="Upload PAN Card" />
              <FileInput required label="Upload Policy Copy" />
            </div>

            {/* Submit Button */}
            <div className="pt-4 border-t border-gray-700 flex justify-end">
              <Button
                className="bg-[#e36e53] hover:bg-[#d45f46] active:ring-2 active:ring-[#e36e53]/50 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200"
                size="small"
                variant="primary"
              >
                Upload
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Endorsement;
