import React from "react";
import Card from "../../components/base/Card";
import Bredcrumb from "../../components/layout/Bredcrumb";
import DashBoard_1 from "../../assets/media/Policies.png";
import DashBoard_2 from "../../assets/media/Users.png";
import DashBoard_3 from "../../assets/media/money.png";
import DashBoard_4 from "../../assets/media/dealership.png";
import ChartComponent from "../../components/base/ChartComponent";
import IssuerWisePolicyReport from "../../Tables/IssuerWisePolicyReport";
import DealerWisePolicyReport from "../../Tables/DealerWisePolicyReport";

const AdminDashboard = () => {
  const sampleData = [
    {
      id: 1,
      issuerName: "Rahul Sharma",
      generated: 10,
      pending: 2,
      cancelled: 1,
      status: true,
    },
    {
      id: 2,
      issuerName: "Amit Verma",
      generated: 7,
      pending: 3,
      cancelled: 0,
      status: false,
    },
    {
      id: 3,
      issuerName: "Amit Verma",
      generated: 7,
      pending: 3,
      cancelled: 0,
      status: false,
    }, {
      id: 4,
      issuerName: "Amit Verma",
      generated: 7,
      pending: 3,
      cancelled: 0,
      status: false,
    }, {
      id: 5,
      issuerName: "Amit Verma",
      generated: 7,
      pending: 3,
      cancelled: 0,
      status: false,
    }, {
      id: 6,
      issuerName: "Amit Verma",
      generated: 7,
      pending: 3,
      cancelled: 0,
      status: false,
    },
  ];

  const sampleData_1 = [
    {
      dealerName: "Subansiri Motors",
      generated: 25,
      payoutPercent: 12,
      monthlyPayout: 3000,
    },
    {
      dealerName: "Arun Auto",
      generated: 14,
      payoutPercent: 10,
      monthlyPayout: 1500,
    },
    {
      dealerName: "Arun Auto",
      generated: 14,
      payoutPercent: 10,
      monthlyPayout: 1500,
    },
    {
      dealerName: "Arun Auto",
      generated: 14,
      payoutPercent: 10,
      monthlyPayout: 1500,
    },
    {
      dealerName: "Arun Auto",
      generated: 14,
      payoutPercent: 10,
      monthlyPayout: 1500,
    },
    {
      dealerName: "Arun Auto",
      generated: 14,
      payoutPercent: 10,
      monthlyPayout: 1500,
    },
    {
      dealerName: "Arun Auto",
      generated: 14,
      payoutPercent: 10,
      monthlyPayout: 1500,
    },
  ];

  return (
    <Card>
      <div className="text-xl font-semibold text-primary mt-2">
        <Bredcrumb heading="Dashboard" page="Dashboard" />
      </div>

      <div className="px-4 md:px-8">
        {/* -------------------- STATS CARDS -------------------- */}
        <div
          className="
            grid gap-4 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-4
            mt-5
          "
        >
          {/* Card 1 */}
          <div className="bg-primary p-4 rounded-lg flex items-center gap-3">
            <img src={DashBoard_1} alt="" className="w-16 h-16" />
            <div>
              <h4 className="text-light text-lg">Total Policies</h4>
              <h2 className="text-light font-semibold text-3xl">3128</h2>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-primary p-4 rounded-lg flex items-center gap-3">
            <img src={DashBoard_2} alt="" className="w-16 h-16" />
            <div>
              <h4 className="text-light text-lg">Total Issuer</h4>
              <h2 className="text-light font-semibold text-3xl">38</h2>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-primary p-4 rounded-lg flex items-center gap-3">
            <img src={DashBoard_4} alt="" className="w-16 h-16" />
            <div>
              <h4 className="text-light text-lg">Total Dealer</h4>
              <h2 className="text-light font-semibold text-3xl">13</h2>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-primary p-4 rounded-lg flex items-center gap-3">
            <img src={DashBoard_3} alt="" className="w-16 h-16" />
            <div>
              <h4 className="text-light text-lg">Total Payment Received</h4>
              <h2 className="text-light font-semibold text-3xl">50,000</h2>
            </div>
          </div>
        </div>

        {/* -------------------- CHART + NOTIFICATION -------------------- */}
        <div
          className="
            grid grid-cols-1 
            lg:grid-cols-4 
            gap-6 mt-8
          "
        >
          {/* Chart takes 3 cols on large screen */}
          <div className="lg:col-span-3">
            <ChartComponent
              title="Policy Overview"
              categories={["A", "B", "C", "D"]}
              data={[1, 3, 2, 6]}
              lineColor="#111827"
            />
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-lg shadow-sm border border-[#e5e7eb] h-full">
            <h1 className="py-3 px-5 text-secondary border-b text-lg font-semibold">
              Notification
            </h1>
            <div className="p-4 text-gray-500 text-sm">
              No new notifications.
            </div>
          </div>
        </div>

        {/* -------------------- REPORT TABLES -------------------- */}
        <div className="mt-8">
          <IssuerWisePolicyReport data={sampleData} />
        </div>

        <div className="mt-6 mb-10">
          <DealerWisePolicyReport data={sampleData_1} />
        </div>
      </div>
    </Card>
  );
};

export default AdminDashboard;
