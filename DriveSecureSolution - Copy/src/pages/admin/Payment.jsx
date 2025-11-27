import React from "react";
import Card from "../../components/base/Card";
import TransactionDssTable from "../../Tables/TransactionDssTable";
import Bredcrumb from "../../components/layout/Bredcrumb";
import DropdownBox from "../../components/base/DropdownBox";
import Button from "../../components/base/Button";
import { Plus } from "lucide-react";

const Payment = () => {
  const sampleData = [
    {
      name: "Subasiri Enterprises",
      date: "12/02/2024",
      amount: "1000",
      txn: "N901pPqg0jDGRU92aRNClB0V0bZ3faVT",
      city: "jaipur",
      status: "Approved",
      remark: "Remark",
    },
    {
      name: "Subasiri Enterprises",
      date: "14/01/2024",
      amount: "200",
      txn: "N901pPqg0jDGRU92aRNClB0V0bZ3faVT",
      city: "jaipur",
      status: "Rejected",
      remark: "Remark",
    },
  ];
  return (
    <Card>
      <div className="text-xl font-semibold text-primary mt-2">
        <Bredcrumb heading="Payments" page="payment" />
      </div>

      <div className="px-10 max-[400]:px-5">
        <div className="flex items-end max-[650px]:flex-col gap-3 sm:gap-8 bg-light p-5 rounded-2xl">
          <div className="flex max-[650px]:flex-col w-full gap-3 sm:gap-8">
            <div className=" w-full">
              <DropdownBox
                label="Dealer Name"
                required
                placeholder="Select Dealer Name"
                onChange={(e) => setPayment(e.target.value)}
                options={[
                  { label: "Dealer-1", value: "dealer1" },
                  { label: "Dealer-2", value: "dealer2" },
                  { label: "Dealer-3", value: "dealer3" },
                ]}
              />
            </div>
            <div className=" w-full">
              <DropdownBox
                label="City"
                required
                placeholder="Select City Name"
                onChange={(e) => setPayment(e.target.value)}
                options={[
                  { label: "City-1", value: "City1" },
                  { label: "City-2", value: "City2" },
                  { label: "City-3", value: "City3" },
                ]}
              />
            </div>
          </div>
          <div className="">
            <Button className="border-2">Search</Button>
          </div>
        </div>
        <hr className="mt-5 text-muted" />
        <div className="w-full mt-5">
        </div>
        <div className="mt-5 mb-10">
          <TransactionDssTable data={sampleData} />
        </div>
      </div>
    </Card>
  );
};

export default Payment;
