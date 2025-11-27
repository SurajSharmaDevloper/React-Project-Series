import { useState } from "react";
import Card from "../../components/base/Card";
import Button from "../../components/base/Button";
import { Plus, Search } from "lucide-react";
import Bredcrumb from "../../components/layout/Bredcrumb";
import DropdownBox from "../../components/base/DropdownBox";
import IssuerDssTable from "../../Tables/IssuerDssTable";
import Pagination from "../../components/base/Pagination";

const IssuerList = () => {
  const [page, setPage] = useState(1);
  const totalPages = 99;
  const dummyIssuerData = [
    {
      issuerId: "IS001",
      issuerName: "Rahul Sharma",
      mobile: "9876543210",
      email: "rahul@example.com",
      pan: "ABCDE1234F",
      adhar: "1234 5678 9000",
      status: true,
    },
    {
      issuerId: "IS002",
      issuerName: "Amit Verma",
      mobile: "9822334455",
      email: "amit@example.com",
      pan: "AFGST5678P",
      adhar: "6789 4455 3322",
      status: false,
    },
  ];
  return (
    <Card className="">
      <div className="text-xl font-semibold text-primary mt-2">
        <Bredcrumb heading="Issuer List" page="Issuer List" />
      </div>
      <div className="px-8">
        <div className="flex w-full max-[460px]:flex-col bg-light p-5 rounded-2xl items-end gap-10 max-[600px]:gap-3 max-[600px]:w-full ">
          <div className="w-full">
            <DropdownBox
              label="Issuer Name"
              required
              placeholder="Select Issuer Name"
              onChange={(e) => setPayment(e.target.value)}
              options={[
                { label: "Issuer-1", value: "Issuer1" },
                { label: "Issuer-2", value: "Issuer2" },
                { label: "Issuer-3", value: "Issuer3" },
              ]}
            />
          </div>
          <div className="w-full  max-[460px]:max-w-full max-w-80">
            <Button className=" w-full flex border border-[#e36e53]  items-center justify-center gap-1">
              <Search size={16} />
              Search
            </Button>
          </div>
        </div>
        <hr className="mt-5 text-muted" />

        <div className="mt-8">
          <IssuerDssTable data={dummyIssuerData} />
        </div>
        <div className="flex items-center justify-between mt-10 mb-10 px-5">
          <Button size="small">Export</Button>
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPrev={() => setPage((p) => Math.max(1, p - 1))}
            onNext={() => setPage((p) => Math.min(totalPages, p + 1))}
          />
        </div>
      </div>
    </Card>
  );
};

export default IssuerList;
