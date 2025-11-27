import React from "react";
import Bredcrumb from "../../components/layout/Bredcrumb";
import Card from "../../components/base/Card";
import ProfileCard from "../../components/base/ProfileCard";
import Button from "../../components/base/Button";
import { Plus } from "lucide-react";
import BasicInfoCard from "../../components/base/BasicInfoCard";
import DealerBasicInfo from "../../components/base/DealerBasicInfo";
import { NavLink } from "react-router-dom";

const dealerData = {
  name: "Subansiri Enterprises",
  dealerId: "1234",
  mobile: "9548289756",
  email: "Subhansiribajaj@gmail.com",
  location: "North Lakhimpur, Assam",
  address: "Bantow bangali, NH-15, North Lakhimpur - 787031",
  manufacturer: "Bajaj",
  rto: "AS07",
  type: "Dealer",
  salesManager: "Bhaban",
  ownerName: "Avinash Kumar Singh",
  executiveName: "Bhaban",
  executiveMobile: "9853047940",
  avatar: "/avatar.png",
};

const paymentDetails = {
  accountHolderName: "Subansiri Enterprise",
  bankName: "State Bank of India",
  accountNumber: "44559845402",
  ifscCode: "SBIN0063813",
  paymentType: "Cut & pay",
  panCardNo: "AS8900TY",
  gstNo: "18ASTYJ08YH76",
  paymentTerms: "Cut & Pay",
  isActive: true, // optional if using toggle
  imgSrc: "", // optional image if required
};



const DealerDetail = () => {
  return (
    <Card className="shadow-lg  rounded-xl">
      {/* Breadcrumb Header */}
      <div className="text-xl font-semibold text-primary mt-2">
        <Bredcrumb heading="Dealer Details" page="Dealer Price List" />
      </div>

      <div className="px-6 md:px-10 pb-10 flex flex-col gap-8">
        {/* ================= Dealer Information ================= */}
        <DealerBasicInfo data={dealerData} />


        {/* ================= Bank / Dealer Details ================= */}
        <BasicInfoCard
          Heading="Account Details"
          data={paymentDetails}
          onToggle={() => alert("Status Changed")}
        />

        {/* Button */}
        <div className="w-full flex justify-end">
          <Button className="flex items-center gap-1 px-5 py-2">
            <Plus size={18} />  <NavLink
              to="/admin/add_price_list"

            >
              View Price List
            </NavLink>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default DealerDetail;
