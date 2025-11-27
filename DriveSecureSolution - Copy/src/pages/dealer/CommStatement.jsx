import React from "react";
import Bredcrumb from "../../components/layout/Bredcrumb";
import CommisionStatementTable from "../../Tables/CommisionStatementTable";
import Button from "../../components/base/Button";
import Card from "../../components/base/Card";

const CommStatement = () => {
  const sampleData = [
    {
      uid: "U-1023",
      dssCortNo: "DSS-5467",
      policyNo: "POL-99876",
      issueDate: "2025-11-11",
      rsdRed: "RSD123",
      firstName: "John Motors",
      lastName: "Ltd",
      gender: "-",
      mobile: "9876543210",
      email: "info@johnmotors.com",
      address: "Sector 21, New Delhi",
      city: "New Delhi",
      state: "Delhi",
      model: "Creta",
      variant: "SX",
      engineNo: "ENG123456",
      chassisNo: "CHS654321",
      paCoverage: "Yes",
      planTenure: "3 Years",
      planType: "Comprehensive",
      totalJdv: "₹12,00,000",
      totalBusinessGst: "₹1,08,000",
      totalBusinessInGst: "₹13,08,000",
      dealerCode: "D102",
      dealerName: "AutoHub",
      paymentTermUsed: "Cash",
      payoutTermValue: "5%",
      totalPayoutBeforeGst: "₹50,000",
      tdsOnTotalPayout: "₹5,000",
      payoutAfterTds: "₹45,000",
      gstOnTotalPayout: "₹9,000",
      totalPaymentIncludingGst: "₹54,000",
      grossBalanceDeduction: "₹0",
      paymentAdjustInBalance: "₹0",
      netBalanceDeduction: "₹0",
      status: "Approved",
      downloadUrl: "#",
    },
  ];

  return (
    <Card>
      {/* Breadcrumb Header */}
      <div className="text-xl font-semibold text-primary mt-2">
        <Bredcrumb
          heading="Commission Statement"
          page="Commission Statement"
        />
      </div>

      {/* Table Section */}
      <div className="px-8 py-6">
        <CommisionStatementTable data={sampleData} />

        {/* Export Button */}
        <div className="pt-4 border-t border-gray-700 flex justify-end mt-6">
          <Button
            className="bg-[#e36e53] hover:bg-[#d45f46] active:ring-2 active:ring-[#e36e53]/50 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200"
            size="small"
            variant="primary"
          >
            Export Table
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CommStatement;
