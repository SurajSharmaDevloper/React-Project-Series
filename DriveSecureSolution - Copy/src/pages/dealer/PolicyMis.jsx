import React from "react";
import Bredcrumb from "../../components/layout/Bredcrumb";
import DownloadPolicyTable from "../../Tables/DownloadPolicyTable";
import Card from "../../components/base/Card";

const PolicyMis = () => {
  const sampleData = [
    {
      date: "2025-11-11",
      name: "John Doe",
      policyNo: "POL12345",
      downloadUrl: "#",
    },
    {
      date: "2025-11-10",
      name: "Jane Smith",
      policyNo: "POL12346",
      downloadUrl: "",
    },
  ];

  return (
    <Card>
      {/* Breadcrumb Header */}
      <div className="text-xl font-semibold text-primary ">
        <Bredcrumb heading="Policy MIS" page="Policy MIS" />
      </div>

      {/* Table Section */}
      <div className="px-8 py-6">
        <DownloadPolicyTable data={sampleData} />
      </div>
    </Card>
  );
};

export default PolicyMis;
