import React, { useState } from "react";
import Card from "../../components/base/Card";
import Bredcrumb from "../../components/layout/Bredcrumb";
import DropdownBox from "../../components/base/DropdownBox";
import Button from "../../components/base/Button";
import { Plus } from "lucide-react";
import DealerListTable from "../../Tables/DealerListTable";
import Pagination from "../../components/base/Pagination";

const DealerList = () => {

  const dealerData = [
    {
      did: "D001",
      dealerName: "Sharma Motors",
      mobile: "9876543210",
      email: "sharma@example.com",
      city: "Delhi",
      manufacturer: "Tata",
    },
    {
      did: "D001",
      dealerName: "Sharma Motors",
      mobile: "9876543210",
      email: "sharma@example.com",
      city: "Delhi",
      manufacturer: "Tata",
    },{
      did: "D001",
      dealerName: "Sharma Motors",
      mobile: "9876543210",
      email: "sharma@example.com",
      city: "Delhi",
      manufacturer: "Tata",
    },{
      did: "D001",
      dealerName: "Sharma Motors",
      mobile: "9876543210",
      email: "sharma@example.com",
      city: "Delhi",
      manufacturer: "Tata",
    },{
      did: "D001",
      dealerName: "Sharma Motors",
      mobile: "9876543210",
      email: "sharma@example.com",
      city: "Delhi",
      manufacturer: "Tata",
    },{
      did: "D001",
      dealerName: "Sharma Motors",
      mobile: "9876543210",
      email: "sharma@example.com",
      city: "Delhi",
      manufacturer: "Tata",
    },{
      did: "D001",
      dealerName: "Sharma Motors",
      mobile: "9876543210",
      email: "sharma@example.com",
      city: "Delhi",
      manufacturer: "Tata",
    },{
      did: "D001",
      dealerName: "Sharma Motors",
      mobile: "9876543210",
      email: "sharma@example.com",
      city: "Delhi",
      manufacturer: "Tata",
    },{
      did: "D001",
      dealerName: "Sharma Motors",
      mobile: "9876543210",
      email: "sharma@example.com",
      city: "Delhi",
      manufacturer: "Tata",
    },{
      did: "D001",
      dealerName: "Sharma Motors",
      mobile: "9876543210",
      email: "sharma@example.com",
      city: "Delhi",
      manufacturer: "Tata",
    },{
      did: "D001",
      dealerName: "Sharma Motors",
      mobile: "9876543210",
      email: "sharma@example.com",
      city: "Delhi",
      manufacturer: "Tata",
    },{
      did: "D001",
      dealerName: "Sharma Motors",
      mobile: "9876543210",
      email: "sharma@example.com",
      city: "Delhi",
      manufacturer: "Tata",
    },{
      did: "D001",
      dealerName: "Sharma Motors",
      mobile: "9876543210",
      email: "sharma@example.com",
      city: "Delhi",
      manufacturer: "Tata",
    },{
      did: "D001",
      dealerName: "Sharma Motors",
      mobile: "9876543210",
      email: "sharma@example.com",
      city: "Delhi",
      manufacturer: "Tata",
    },{
      did: "D001",
      dealerName: "Sharma Motors",
      mobile: "9876543210",
      email: "sharma@example.com",
      city: "Delhi",
      manufacturer: "Tata",
    },{
      did: "D001",
      dealerName: "Sharma Motors",
      mobile: "9876543210",
      email: "sharma@example.com",
      city: "Delhi",
      manufacturer: "Tata",
    },{
      did: "D001",
      dealerName: "Sharma Motors",
      mobile: "9876543210",
      email: "sharma@example.com",
      city: "Delhi",
      manufacturer: "Tata",
    },{
      did: "D001",
      dealerName: "Sharma Motors",
      mobile: "9876543210",
      email: "sharma@example.com",
      city: "Delhi",
      manufacturer: "Tata",
    },{
      did: "D001",
      dealerName: "Sharma Motors",
      mobile: "9876543210",
      email: "sharma@example.com",
      city: "Delhi",
      manufacturer: "Tata",
    },{
      did: "D001",
      dealerName: "Sharma Motors",
      mobile: "9876543210",
      email: "sharma@example.com",
      city: "Delhi",
      manufacturer: "Tata",
    },{
      did: "D001",
      dealerName: "Sharma Motors",
      mobile: "9876543210",
      email: "sharma@example.com",
      city: "Delhi",
      manufacturer: "Tata",
    },{
      did: "D001",
      dealerName: "Sharma Motors",
      mobile: "9876543210",
      email: "sharma@example.com",
      city: "Delhi",
      manufacturer: "Tata",
    },{
      did: "D001",
      dealerName: "Sharma Motors",
      mobile: "9876543210",
      email: "sharma@example.com",
      city: "Delhi",
      manufacturer: "Tata",
    },

    {
      did: "D002",
      dealerName: "Auto India",
      mobile: "9988776655",
      email: "autoindia@example.com",
      city: "Mumbai",
      manufacturer: "Maruti Suzuki",
    },
  ];
  return (
    <Card>
      <div className="text-xl font-semibold text-primary mt-2">
        <Bredcrumb heading="Dealer List" page="Dealer List" />
      </div>
      <div className="px-8">
        <div className="flex items-end max-[650px]:flex-col gap-3 sm:gap-8 bg-light p-5 rounded-2xl">
          <div className="flex max-[650px]:flex-col w-full gap-3 sm:gap-8 ">
            <div className=" w-full ">
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
        <div className="mt-8">
          <DealerListTable data={dealerData} />
        </div>
      </div>
    </Card>
  );
};

export default DealerList;
