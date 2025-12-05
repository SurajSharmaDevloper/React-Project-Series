import React from "react";
import Bredcrumb from "../../components/layout/Bredcrumb";
import FileInput from "../../components/base/FileInput";
import Button from "../../components/base/Button";
import { Download } from "lucide-react";
import InvoiceHistoryTable from "../../Tables/InvoiceHistoryTable";
import Card from "../../components/base/Card";

const Invoice = () => {
  const invoices = [
    {
      sno: 1,
      date: "12/02/2025",
      amount: "₹2,000",
      invoiceNumber: "INV-2025-001",
      gstStatus: "Filed",
      status: "Approved",
      remarks: "Payment cleared",
    },
    {
      sno: 2,
      date: "20/02/2025",
      amount: "₹1,500",
      invoiceNumber: "INV-2025-002",
      gstStatus: "Pending",
      status: "Processing",
      remarks: "Awaiting GST filing",
    },
    {
      sno: 3,
      date: "25/02/2025",
      amount: "₹1,000",
      invoiceNumber: "INV-2025-003",
      gstStatus: "Not Filed",
      status: "Rejected",
      remarks: "GST filing failed",
    },
    {
      sno: 4,
      date: "25/02/2025",
      amount: "₹1,000",
      invoiceNumber: "INV-2025-003",
      gstStatus: "Not Filed",
      status: "Rejected",
      remarks: "GST filing failed",
    }, {
      sno: 5,
      date: "25/02/2025",
      amount: "₹1,000",
      invoiceNumber: "INV-2025-003",
      gstStatus: "Not Filed",
      status: "Rejected",
      remarks: "GST filing failed",
    }, {
      sno: 6,
      date: "25/02/2025",
      amount: "₹1,000",
      invoiceNumber: "INV-2025-003",
      gstStatus: "Not Filed",
      status: "Rejected",
      remarks: "GST filing failed",
    }, {
      sno: 7,
      date: "25/02/2025",
      amount: "₹1,000",
      invoiceNumber: "INV-2025-003",
      gstStatus: "Not Filed",
      status: "Rejected",
      remarks: "GST filing failed",
    }, {
      sno: 8,
      date: "25/02/2025",
      amount: "₹1,000",
      invoiceNumber: "INV-2025-003",
      gstStatus: "Not Filed",
      status: "Rejected",
      remarks: "GST filing failed",
    }, {
      sno: 9,
      date: "25/02/2025",
      amount: "₹1,000",
      invoiceNumber: "INV-2025-003",
      gstStatus: "Not Filed",
      status: "Rejected",
      remarks: "GST filing failed",
    }, {
      sno: 10,
      date: "25/02/2025",
      amount: "₹1,000",
      invoiceNumber: "INV-2025-003",
      gstStatus: "Not Filed",
      status: "Rejected",
      remarks: "GST filing failed",
    }, {
      sno: 11,
      date: "25/02/2025",
      amount: "₹1,000",
      invoiceNumber: "INV-2025-003",
      gstStatus: "Not Filed",
      status: "Rejected",
      remarks: "GST filing failed",
    }, {
      sno: 12,
      date: "25/02/2025",
      amount: "₹1,000",
      invoiceNumber: "INV-2025-003",
      gstStatus: "Not Filed",
      status: "Rejected",
      remarks: "GST filing failed",
    }, {
      sno: 13,
      date: "25/02/2025",
      amount: "₹1,000",
      invoiceNumber: "INV-2025-003",
      gstStatus: "Not Filed",
      status: "Rejected",
      remarks: "GST filing failed",
    }, {
      sno: 14,
      date: "25/02/2025",
      amount: "₹1,000",
      invoiceNumber: "INV-2025-003",
      gstStatus: "Not Filed",
      status: "Rejected",
      remarks: "GST filing failed",
    }, {
      sno: 15,
      date: "25/02/2025",
      amount: "₹1,000",
      invoiceNumber: "INV-2025-003",
      gstStatus: "Not Filed",
      status: "Rejected",
      remarks: "GST filing failed",
    }, {
      sno: 16,
      date: "25/02/2025",
      amount: "₹1,000",
      invoiceNumber: "INV-2025-003",
      gstStatus: "Not Filed",
      status: "Rejected",
      remarks: "GST filing failed",
    }, {
      sno: 17,
      date: "25/02/2025",
      amount: "₹1,000",
      invoiceNumber: "INV-2025-003",
      gstStatus: "Not Filed",
      status: "Rejected",
      remarks: "GST filing failed",
    }, {
      sno: 18,
      date: "25/02/2025",
      amount: "₹1,000",
      invoiceNumber: "INV-2025-003",
      gstStatus: "Not Filed",
      status: "Rejected",
      remarks: "GST filing failed",
    }, {
      sno: 19,
      date: "25/02/2025",
      amount: "₹1,000",
      invoiceNumber: "INV-2025-003",
      gstStatus: "Not Filed",
      status: "Rejected",
      remarks: "GST filing failed",
    }, {
      sno: 20,
      date: "25/02/2025",
      amount: "₹1,000",
      invoiceNumber: "INV-2025-003",
      gstStatus: "Not Filed",
      status: "Rejected",
      remarks: "GST filing failed",
    }, {
      sno: 21,
      date: "25/02/2025",
      amount: "₹1,000",
      invoiceNumber: "INV-2025-003",
      gstStatus: "Not Filed",
      status: "Rejected",
      remarks: "GST filing failed",
    }, {
      sno: 22,
      date: "25/02/2025",
      amount: "₹1,000",
      invoiceNumber: "INV-2025-003",
      gstStatus: "Not Filed",
      status: "Rejected",
      remarks: "GST filing failed",
    }, {
      sno: 23,
      date: "25/02/2025",
      amount: "₹1,000",
      invoiceNumber: "INV-2025-003",
      gstStatus: "Not Filed",
      status: "Rejected",
      remarks: "GST filing failed",
    }, {
      sno: 24,
      date: "25/02/2025",
      amount: "₹1,000",
      invoiceNumber: "INV-2025-003",
      gstStatus: "Not Filed",
      status: "Rejected",
      remarks: "GST filing failed",
    }, {
      sno: 25,
      date: "25/02/2025",
      amount: "₹1,000",
      invoiceNumber: "INV-2025-003",
      gstStatus: "Not Filed",
      status: "Rejected",
      remarks: "GST filing failed",
    }, {
      sno: 26,
      date: "25/02/2025",
      amount: "₹1,000",
      invoiceNumber: "INV-2025-003",
      gstStatus: "Not Filed",
      status: "Rejected",
      remarks: "GST filing failed",
    }, {
      sno: 27,
      date: "25/02/2025",
      amount: "₹1,000",
      invoiceNumber: "INV-2025-003",
      gstStatus: "Not Filed",
      status: "Rejected",
      remarks: "GST filing failed",
    }, {
      sno: 28,
      date: "25/02/2025",
      amount: "₹1,000",
      invoiceNumber: "INV-2025-003",
      gstStatus: "Not Filed",
      status: "Rejected",
      remarks: "GST filing failed",
    },
  ];

  return (
    <Card>
      {/* Breadcrumb Header */}
      <div className="text-xl font-semibold text-primary mt-2">
        <Bredcrumb heading="Invoice" page="Invoice" />
      </div>

      {/* Upload + Download */}
      <div className="px-5 py-6">
        <div className="flex flex-col rounded-xl px-5 py-4 bg-light sm:flex-row justify-between items-start sm:items-end gap-6">
          <div className="w-full">
            <FileInput required label="Upload Invoice" />
          </div>
          <Button
            className="flex items-center gap-2 bg-[#e36e53] hover:bg-[#d45f46] active:ring-2 active:ring-[#e36e53]/50 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 text-nowrap"
            size="small"
            variant="primary"
          >
            <Download size={18} />
            Download Payment History
          </Button>
        </div>

        {/* Submit Button */}
        <div className="pt-5 border-t border-gray-700 flex justify-end mt-6">
          <Button
            className="bg-[#e36e53] hover:bg-[#d45f46] active:ring-2 active:ring-[#e36e53]/50 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 flex items-center gap-2"
            size="small"
            variant="primary"
          >
            Submit
          </Button>
        </div>

        {/* Invoice Table */}
        <div className="mt-8">
          <InvoiceHistoryTable data={invoices} />
        </div>
      </div>
    </Card>
  );
};

export default Invoice;
