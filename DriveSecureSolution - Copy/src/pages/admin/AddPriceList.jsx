import React from "react";
import Card from "../../components/base/Card";
import Button from "../../components/base/Button";
import Bredcrumb from "../../components/layout/Bredcrumb";
import InputBox from "../../components/base/InputBox";
import users from "../../assets/media/UserImg.png"
import BasicInfoCard from "../../components/base/BasicInfoCard";

const AddPriceList = () => {
  const dealerDetails = {
    dealerName: "Subansiri Enterprises",
    dealerId: "1234",
    mobileNo: "9548289756",
    location: "North Lakhimpur, Assam",
    address: "Bantow bangali, NH-15, North Lakhimpur - 787031",
    manufacturer: "Bajaj",
    rto: "AS07"
  };
  return (
    <Card>
      {/* Breadcrumb Header */}
      <div className="text-xl font-semibold text-primary mt-2">
        <Bredcrumb heading="Add Price List" page="Add Price List" />
      </div>

      <div className="px-4 md:px-10 pb-6">
        {/* ================= DEALER INFORMATION ================= */}
        <BasicInfoCard
          Heading="Basic Info"
          data={dealerDetails}

        />

        {/* ================= FORM SECTION ================= */}
        <div className="mt-6">
          <hr className="text-muted" />

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 bg-[#fff9f9] p-5 rounded-2xl">
            <InputBox label="Make" placeholder="Enter Make (AS01)" />
            <InputBox label="Model" placeholder="Enter Model" />
            <InputBox label="IDV" placeholder="Enter IDV" />
            <InputBox label="Premium" placeholder="Enter Premium" />
          </div>

          {/* Submit Button */}
          <div className="w-full my-8 flex justify-end">
            <Button>Submit</Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AddPriceList;
