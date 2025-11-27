import React from "react";
import Button from "../../components/base/Button";
import FileInput from "../../components/base/FileInput";
import InputBox from "../../components/base/InputBox";
import Bredcrumb from "../../components/layout/Bredcrumb";
import Card from "../../components/base/Card";

const AddNewIssuer = () => {
  return (
    <Card>
      <div className="text-xl font-semibold text-primary mt-2">
        <Bredcrumb heading="Add New Issuer" page="Add New Issuer" />
      </div>
      <div className="px-5">
        <div className="bg-light p-5 rounded-2xl">
          <div className="flex gap-5 w-full max-[650px]:flex-col items-center">
            <div className="w-full">
              <InputBox label="Name" placeholder="Enter Name" />
            </div>
            <div className="w-full">
              <InputBox label="Email ID" placeholder="Enter Email Id"  />
            </div>
          </div>
          <div className="flex gap-5 mt-3 w-full max-[650px]:flex-col items-center">
            <div className="w-full">
              <InputBox label="Mobile No" placeholder="Enter Mobile No" />
            </div>
            <div className="w-full">
              <FileInput label="Upload Aadhar Front" />
            </div>
          </div>
          <div className="flex gap-5 mt-3 w-full max-[650px]:flex-col items-center">
            <div className="w-full">
              <FileInput label="Upload Aadhar Back" />
            </div>
            <div className="w-full">
              <FileInput label="Upload PAN Card" />
            </div>
          </div>
          <div className="w-1/2 pr-2 max-[700px]:w-full max-[700px]:pr-0 mt-3 flex gap-5 max-[650px]:flex-col items-center">
            <div className="w-full">
              <FileInput label="Profile Photo" />
            </div>
          </div>
          <div className="w-full my-10 flex justify-end">
            <Button>Submit</Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AddNewIssuer;
