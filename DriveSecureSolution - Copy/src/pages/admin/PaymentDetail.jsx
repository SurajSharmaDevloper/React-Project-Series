import React from "react";
import Card from "../../components/base/Card";
import Bredcrumb from "../../components/layout/Bredcrumb";
import BasicInfoCard from "../../components/base/BasicInfoCard";
import PaymentDetailsCard from "../../components/base/PaymentDetailCard";



const PaymentDetail = () => {
  const dealerDetails = {
    dealerName: "Subansiri Enterprises",
    dealerId: "1234",
    mobileNo: "9548289756",
    location: "North Lakhimpur, Assam",
    address: "Bantow bangali, NH-15, North Lakhimpur - 787031",
    manufacturer: "Bajaj",
    rto: "AS07"
  };
  const PaymentDetails = {
    PaymentMethod: "UPI",
    PaymentType: "Cut & Pay",
    Amount: "10,000",
    TransactionReferenceNumber: "SCR34495500",
    TransactionDate: "12/10/2025",
    Status: "Approved",
  };
  return (
    <Card>
      <div className="text-xl font-semibold text-primary mt-2">
        <Bredcrumb heading="Payment Details" page="Payment Details" />
      </div>
      <div className="px-8 mb-8">
        <BasicInfoCard
          Heading="Basic Info"
          data={dealerDetails}
        />
      </div>
      {/* Form Section */}
      <div className="px-8">
        <PaymentDetailsCard />
      </div>
    </Card >
  );
};

export default PaymentDetail;
