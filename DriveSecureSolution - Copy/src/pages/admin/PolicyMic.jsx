import React from "react";
import Card from "../../components/base/Card";
import Bredcrumb from "../../components/layout/Bredcrumb";
import IssuerPolicyMicTable from "../../Tables/IssuerPolicyMicTable";
import Button from "../../components/base/Button";

const PolicyMic = () => {
  const sampleData = [
    {
      date: "2025-02-14",
      name: "Rahul Sharma",
      policyNo: "POL987654",
    },
    {
      date: "2025-02-13",
      name: "Sneha Verma",
      policyNo: "POL123456",
    },
  ];

  return (
    <Card >
      <div className="text-xl font-semibold text-primary mt-2">
        <Bredcrumb heading="Policy MIC" page="Policy MIC" />
      </div>
      <div className="px-8 mb-5">
        <IssuerPolicyMicTable data={sampleData} />
      </div>
    </Card>
  );
};

export default PolicyMic;
