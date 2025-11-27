import React from "react";
import Card from "../../components/base/Card";
import DealerWisePriceListTable from "../../Tables/DealerWisePriceListTable";
import Bredcrumb from "../../components/layout/Bredcrumb";
import users from "../../assets/media/UserImg.png"
import InputBox from "../../components/base/InputBox";
import BasicInfoCard from "../../components/base/BasicInfoCard";

const DealerWisePriceList = () => {
  const sampleData = [
    {
      make: "Tata",
      model: "Tiago",
      idv: "3,40,000",
      premium: "12,500",
      status: "Active",
    },
    {
      make: "Maruti",
      model: "Swift",
      idv: "4,20,000",
      premium: "14,800",
      status: "Inactive",
    },
  ];
  const basicInfo = {
    name: "Subansiri Enterprise",
    dealerId: "1234",
    mobileNo: "9548289756",
    location: "North Lakhimpur, Assam",
    address: "Bantow bangali, NH-15, North Lakhimpur-787031",
    manufacturer: "BAJAJ",
    rto: "AS07",
    imgSrc: "/mnt/data/69d57415-f938-483f-9e72-8a18337ded58.png",
    isActive: true
  };

  return (
    <Card>
      <div className="text-xl font-semibold text-primary mt-2">
        <Bredcrumb heading="Dealer Price List" page="Dealer Price List" />
      </div>
      <div className="px-8 mb-5">
        <BasicInfoCard
          Heading="Basic Info"
          data={basicInfo}
        />
      </div>

      <div className="px-8 max-[600px]:px-5 mb-10">
        <DealerWisePriceListTable data={sampleData} />
      </div>
    </Card>
  );
};

export default DealerWisePriceList;
