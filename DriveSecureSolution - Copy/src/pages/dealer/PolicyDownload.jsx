import React from "react";
import Bredcrumb from "../../components/layout/Bredcrumb";
import PolicyTable from "../../Tables/PolicyTable";
import Card from "../../components/base/Card";

const PolicyDownload = () => {
  const policyData = [
    {
      uid: "UID001",
      date: "12/02/2025",
      time: "10:30 AM",
      name: "Ravi Sharma",
      policyNo: "POL12345",
      status: "Approved",
      downloadUrl: "/files/POL12345.pdf",
    },
    {
      uid: "UID002",
      date: "15/02/2025",
      time: "11:45 AM",
      name: "Anita Verma",
      policyNo: "POL12346",
      status: "Pending",
      downloadUrl: "/files/POL12346.pdf",
    },
    {
      uid: "UID003",
      date: "18/02/2025",
      time: "09:20 AM",
      name: "Sunil Mehta",
      policyNo: "POL12347",
      status: "Rejected",
    },
    {
      uid: "UID001",
      date: "12/02/2025",
      time: "10:30 AM",
      name: "Ravi Sharma",
      policyNo: "POL12345",
      status: "Approved",
      downloadUrl: "/files/POL12345.pdf",
    },
    {
      uid: "UID002",
      date: "15/02/2025",
      time: "11:45 AM",
      name: "Anita Verma",
      policyNo: "POL12346",
      status: "Pending",
      downloadUrl: "/files/POL12346.pdf",
    },
    {
      uid: "UID003",
      date: "18/02/2025",
      time: "09:20 AM",
      name: "Sunil Mehta",
      policyNo: "POL12347",
      status: "Rejected",
    },
    {
      uid: "UID001",
      date: "12/02/2025",
      time: "10:30 AM",
      name: "Ravi Sharma",
      policyNo: "POL12345",
      status: "Approved",
      downloadUrl: "/files/POL12345.pdf",
    },
    {
      uid: "UID002",
      date: "15/02/2025",
      time: "11:45 AM",
      name: "Anita Verma",
      policyNo: "POL12346",
      status: "Pending",
      downloadUrl: "/files/POL12346.pdf",
    },
    {
      uid: "UID003",
      date: "18/02/2025",
      time: "09:20 AM",
      name: "Sunil Mehta",
      policyNo: "POL12347",
      status: "Rejected",
    },
    {
      uid: "UID001",
      date: "12/02/2025",
      time: "10:30 AM",
      name: "Ravi Sharma",
      policyNo: "POL12345",
      status: "Approved",
      downloadUrl: "/files/POL12345.pdf",
    },
    {
      uid: "UID002",
      date: "15/02/2025",
      time: "11:45 AM",
      name: "Anita Verma",
      policyNo: "POL12346",
      status: "Pending",
      downloadUrl: "/files/POL12346.pdf",
    },
    {
      uid: "UID003",
      date: "18/02/2025",
      time: "09:20 AM",
      name: "Sunil Mehta",
      policyNo: "POL12347",
      status: "Rejected",
    },
    {
      uid: "UID001",
      date: "12/02/2025",
      time: "10:30 AM",
      name: "Ravi Sharma",
      policyNo: "POL12345",
      status: "Approved",
      downloadUrl: "/files/POL12345.pdf",
    },
    {
      uid: "UID002",
      date: "15/02/2025",
      time: "11:45 AM",
      name: "Anita Verma",
      policyNo: "POL12346",
      status: "Pending",
      downloadUrl: "/files/POL12346.pdf",
    },
    {
      uid: "UID003",
      date: "18/02/2025",
      time: "09:20 AM",
      name: "Sunil Mehta",
      policyNo: "POL12347",
      status: "Rejected",
    },
    {
      uid: "UID001",
      date: "12/02/2025",
      time: "10:30 AM",
      name: "Ravi Sharma",
      policyNo: "POL12345",
      status: "Approved",
      downloadUrl: "/files/POL12345.pdf",
    },
    {
      uid: "UID002",
      date: "15/02/2025",
      time: "11:45 AM",
      name: "Anita Verma",
      policyNo: "POL12346",
      status: "Pending",
      downloadUrl: "/files/POL12346.pdf",
    },
    {
      uid: "UID003",
      date: "18/02/2025",
      time: "09:20 AM",
      name: "Sunil Mehta",
      policyNo: "POL12347",
      status: "Rejected",
    },
    {
      uid: "UID001",
      date: "12/02/2025",
      time: "10:30 AM",
      name: "Ravi Sharma",
      policyNo: "POL12345",
      status: "Approved",
      downloadUrl: "/files/POL12345.pdf",
    },
    {
      uid: "UID002",
      date: "15/02/2025",
      time: "11:45 AM",
      name: "Anita Verma",
      policyNo: "POL12346",
      status: "Pending",
      downloadUrl: "/files/POL12346.pdf",
    },
    {
      uid: "UID003",
      date: "18/02/2025",
      time: "09:20 AM",
      name: "Sunil Mehta",
      policyNo: "POL12347",
      status: "Rejected",
    },
    {
      uid: "UID001",
      date: "12/02/2025",
      time: "10:30 AM",
      name: "Ravi Sharma",
      policyNo: "POL12345",
      status: "Approved",
      downloadUrl: "/files/POL12345.pdf",
    },
    {
      uid: "UID002",
      date: "15/02/2025",
      time: "11:45 AM",
      name: "Anita Verma",
      policyNo: "POL12346",
      status: "Pending",
      downloadUrl: "/files/POL12346.pdf",
    },
    {
      uid: "UID003",
      date: "18/02/2025",
      time: "09:20 AM",
      name: "Sunil Mehta",
      policyNo: "POL12347",
      status: "Rejected",
    },
  ];

  return (
    <Card>
      {/* Breadcrumb Header */}
      <div className="text-xl font-semibold text-primary">
        <Bredcrumb heading="Policy Download" page="Policy Download" />
      </div>

      {/* Table Section */}
      <div className="px-8 py-6">
        <PolicyTable data={policyData} />
      </div>
    </Card>


  );
};

export default PolicyDownload;
