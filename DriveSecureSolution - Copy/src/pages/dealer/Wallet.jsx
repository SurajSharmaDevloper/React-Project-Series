import { useState } from "react";
import Bredcrumb from "../../components/layout/Bredcrumb";
import Modal from "../../components/base/Modal";
import DropdownBox from "../../components/base/DropdownBox";
import FileInput from "../../components/base/FileInput";
import InputBox from "../../components/base/InputBox";
import DateInputBox from "../../components/base/DateInputBox";
import Button from "../../components/base/Button";
import HistoryTable from "../../Tables/HistoryTable";
import { Download } from "lucide-react";
import Card from "../../components/base/Card";

const Wallet = () => {
  const [open, setOpen] = useState(false);
  const [payment, setPayment] = useState("");
  const [dob, setDob] = useState("");

  const paymentData = [
    {
      sno: 1,
      date: "12/02/2022",
      amount: "1000",
      referenceId: "N901pPaoiDGRU92aRNCiB0V0",
      status: "Approved",
      remarks: "Remark",
    },
    {
      sno: 2,
      date: "14/01/2022",
      amount: "200",
      referenceId: "N901pPaoiDGRU92aRNCiB0V0",
      status: "Processing",
      remarks: "Remark",
    },
    {
      sno: 3,
      date: "08/11/2022",
      amount: "3000",
      referenceId: "N901pPaoiDGRU92aRNCiB0V0",
      status: "Rejected",
      remarks: "Remark",
    },
    {
      sno: 4,
      date: "03/10/2022",
      amount: "5000",
      referenceId: "N901pPaoiDGRU92aRNCiB0V0",
      status: "Approved",
      remarks: "Remark",
    },
    {
      sno: 5,
      date: "22/04/2022",
      amount: "8000",
      referenceId: "N901pPaoiDGRU92aRNCiB0V0",
      status: "Processing",
      remarks: "Remark",
    },
  ];

  return (
    <Card>
      {/* Breadcrumb Header */}
      <div className="text-xl font-semibold text-primary mt-2">
        <Bredcrumb heading="Your Wallet" page="Wallet" />
      </div>

      {/* Balance Info */}
      <div className="px-8 py-2">
        <div className="border rounded-xl px-5 py-4 bg-light border-muted flex flex-wrap gap-5 justify-between items-center p-6 bg-surface/50">
          <div>
            <h3 className="text-lg font-semibold text-secondary">
              Your Balance
            </h3>
            <p className="flex text-secondary items-center gap-1 text-lg font-medium">
              <i className="bx bx-rupee text-xl"></i>
              <span>10,000</span>
            </p>
          </div>
          <Button
            onClick={() => setOpen(true)}
            className="bg-[#e36e53] hover:bg-[#d45f46] active:ring-2 active:ring-[#e36e53]/50 text-white font-semibold flex items-center gap-2 px-5 py-3 rounded-xl transition-all duration-200"
            size="small"
            variant="primary"
          >
            <i className="bx bx-plus-circle text-lg"></i>
            Add Balance
          </Button>
        </div>
      </div>

     <hr className="my-5 text-muted" />

      {/* History Table */}
      <div className="px-8 pb-8">
        <HistoryTable noDataMessage="No Payment History" data={paymentData} />
      </div>

      {/* Add Balance Modal */}
      <Modal isOpen={open} onClose={() => setOpen(false)} title="Add Balance">
        <div className="w-full px-5 py-4">
          <div className="space-y-4">
            <DropdownBox
              label="Payment Mode"
              required
              placeholder="Select Payment Mode"
              value={payment}
              onChange={(e) => setPayment(e.target.value)}
              options={[
                { label: "UPI", value: "upi" },
                { label: "Card", value: "card" },
                { label: "Bank", value: "bank" },
              ]}
            />

            <FileInput
              label="Upload Proof"
              required
              onChange={(e) => e.preventDefault()}
            />

            <DateInputBox
              label="Transaction Date"
              required
              placeholder="Enter Transaction Date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />

            <InputBox
              label="Transaction Reference Number"
              required
              placeholder="Enter Transaction Reference Number"
              onChange={(e) => e.preventDefault()}
            />

            <InputBox
              label="Amount"
              required
              onChange={(e) => e.preventDefault()}
            />

            <div className="pt-4 border-t border-gray-700 flex justify-end">
              <Button
                className="bg-[#e36e53] hover:bg-[#d45f46] active:ring-2 active:ring-[#e36e53]/50 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200"
                size="medium"
                variant="primary"
              >
                Add Balance
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </Card>
  );
};

export default Wallet;
