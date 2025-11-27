import React from "react";
import Card from "../../components/base/Card";
import { DollarSign, Download } from "lucide-react";
import Logo from '/Dss_Logo.png'

const InvoicePage = () => {
  return (
    <Card>
      <div className="p-8 bg-[#fff9f9] rounded-2xl mx-auto shadow-sm">

        {/* ➤ TOP ORDER HEADER */}
        <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-[#c4c8cb] mb-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[#111827]">
            Order <span className="text-[#e36e53]">#AD20294</span>
          </h2>

          <div className="flex gap-3">
            {/* DOWNLOAD BUTTON */}
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-semibold border border-gray-300 rounded-md hover:bg-gray-100 transition">
              <Download size={13} />
              Download (.pdf)
            </button>

            {/* RECEIVE PAYMENT BUTTON */}
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-semibold border border-green-400 text-green-500 rounded-md hover:bg-green-50 transition">
              <DollarSign size={16} className="text-green-500" />
              Receive Payment
            </button>
          </div>
        </div>

        {/* HEADER */}
        <div className="flex justify-between rounded-xl flex-wrap items-start mb-6">
          {/* LOGO + COMPANY */}
          <div className="py-5">
            <img
              src={Logo}
              alt="Logo"
              className="h-24 mb-5"
            />
            <h2 className="text-xl px-5 font-bold text-gray-800">
              Drive Secure Solution
            </h2>
            <p className="text-sm px-5 text-gray-700 leading-tight">
              Bantow bangali, NH-15, North Lakhimpur - 787031 <br />  North Lakhimpur, Assam
            </p>
          </div>
        </div>

        {/* BILL TO */}
        <div className="flex justify-between p-5 mb-5 border text-muted rounded-xl" >
          {/* INVOICE DETAILS */}
          <div className=" text-sm text-gray-800">
            <h3 className="text-2xl font-semibold border-b-2 border-[#e36e53] inline-block">
              Invoice Details
            </h3>
            <p className="mt-2 text-gray-700">
              <b>Invoice No:</b> 14
            </p >
            <p className="text-gray-700">
              <b>Order Number:</b> AD20294
            </p>
            <p className="text-gray-700">
              <b>Invoice Date:</b> 2024-11-01
            </p>
            <p className="text-gray-700">
              <b>Payment Due:</b> Upon Receipt
            </p>
          </div>
          <div className="mb-6 px-5">
            <h3 className="text-2xl font-semibold text-gray-800 border-b-2 border-[#e36e53] inline-block">
              Invoice To
            </h3>
            <h2 className="text-lg font-semibold mb-1 text-gray-800">Subansiri Enterprise</h2>
            <p className="text-sm text-gray-700 leading-tight">
              North Lakhimpur, Assam <br />
              Bantow bangali, NH-15, North Lakhimpur - 787031 <br />
              Subhansiribajaj@gmail.com, 9871067945
            </p>
          </div>
        </div>


        {/* TABLE */}
        <div className="overflow-x-auto bg-white rounded-lg border border-[#c4c8cb]">
          <table className="min-w-full text-sm">
            <thead className="bg-[#e36e53] text-white">
              <tr>
                <th className="px-4 py-3 border border-[#c4c8cb] text-left font-medium">
                  Products
                </th>
                <th className="px-4 py-3 border border-[#c4c8cb] text-left font-medium">
                  Quantity
                </th>
                <th className="px-4 py-3 border border-[#c4c8cb] text-left font-medium">
                  Rate
                </th>
                <th className="px-4 py-3 border border-[#c4c8cb] text-left font-medium">
                  Amount
                </th>
              </tr>
            </thead>

            <tbody className="text-[#111827]">
              <tr className="hover:bg-[#fff4f1] transition-colors">
                <td className="px-4 py-3 border border-[#c4c8cb]">
                  Platinum Web Hosting Package <br />
                  <span className="text-gray-600 text-xs">Down 35mb, Up 100mb</span>
                </td>
                <td className="px-4 py-3 border border-[#c4c8cb]">2</td>
                <td className="px-4 py-3 border border-[#c4c8cb]">$65.00</td>
                <td className="px-4 py-3 border border-[#c4c8cb]">$130.00</td>
              </tr>

              <tr className="hover:bg-[#fff4f1] transition-colors">
                <td className="px-4 py-3 border border-[#c4c8cb]">
                  2 Page Website Design <br />
                  <span className="text-gray-600 text-xs">
                    Includes basic wireframes and responsive templates
                  </span>
                </td>
                <td className="px-4 py-3 border border-[#c4c8cb]">1</td>
                <td className="px-4 py-3 border border-[#c4c8cb]">$2100.00</td>
                <td className="px-4 py-3 border border-[#c4c8cb]">$2100.00</td>
              </tr>

              <tr className="hover:bg-[#fff4f1] transition-colors">
                <td className="px-4 py-3 border border-[#c4c8cb]">
                  Web App Development <br />
                  <span className="text-gray-600 text-xs">Includes react SPA</span>
                </td>
                <td className="px-4 py-3 border border-[#c4c8cb]">6</td>
                <td className="px-4 py-3 border border-[#c4c8cb]">$2000.00</td>
                <td className="px-4 py-3 border border-[#c4c8cb]">$12000.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* TOTAL */}
        <div className="flex justify-end mt-6">
          <div className="bg-white rounded-xl border border-[#c4c8cb] w-72">
            <div className="p-3 text-sm flex justify-between">
              <p>Subtotal:</p>
              <p className="font-semibold">$18,230.00</p>
            </div>
            <div className="p-3 text-sm flex justify-between border-t border-[#c4c8cb]">
              <p>Tax 8%:</p>
              <p className="font-semibold">$1458.40</p>
            </div>
            <div className="p-3 text-sm flex justify-between border-t border-[#c4c8cb] bg-[#e36e53] text-white rounded-b-xl">
              <p className="font-bold">Total:</p>
              <p className="font-bold">$19,688.40</p>
            </div>
          </div>
        </div>

      </div>
    </Card>
  );
};

export default InvoicePage;
