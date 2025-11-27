import React from "react";
import PaymentImg from "../../assets/media/payment-img.jpg"
import Button from "./Button";
import PaymentActionBox from "./PaymentActionBox";

const PaymentDetailsCard = ({ payment = {} }) => {
    const {
        method = "UPI",
        amount = "10,000",
        reference = "SCR34495500",
        date = "12/10/2025",
        status = "Approved",
    } = payment;

    return (
        <div className="bg-white w-full  rounded-lg shadow-sm overflow-hidden">
            {/* Header */}
            <div className="bg-[#DF6C50] py-2 px-6 font-semibold text-light w-full">
                <h2>Payment Details</h2>
            </div>
            <div className="flex justify-between flex-wrap">
                <div className="p-6 text-[15px] font-medium text-gray-700">
                    <p className="mb-3">
                        <span className="font-semibold text-gray-900">Payment Method : </span>
                        {method}
                    </p>

                    <p className="mb-3">
                        <span className="font-semibold text-gray-900">Amount : </span>
                        {amount}
                    </p>

                    <p className="mb-3">
                        <span className="font-semibold text-gray-900">Transaction Reference Number : </span>
                        {reference}
                    </p>

                    <p className="mb-3">
                        <span className="font-semibold text-gray-900">Transaction Date : </span>
                        {date}
                    </p>

                    <p className="mb-3">
                        <span className="font-semibold text-gray-900">Status : </span>
                        <span className="text-green-600 font-semibold">{status}</span>
                    </p>
                </div>
                <div className="p-5 flex flex-col justify-center items-center gap-5" >
                    <div className="w-60 border border-neutral-400 rounded-xl">
                        <img className="rounded-xl" src={PaymentImg} alt="" />
                    </div>
                    <PaymentActionBox />
                </div>
            </div>
            {/* Body */}

        </div>
    );
};

export default PaymentDetailsCard;
