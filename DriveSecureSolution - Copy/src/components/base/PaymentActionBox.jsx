import React, { useState } from "react";

const PaymentActionBox = () => {
    const [showApproveModal, setShowApproveModal] = useState(false);
    const [showRejectModal, setShowRejectModal] = useState(false);
    const [remark, setRemark] = useState("");

    return (
        <div className=" w-60 p-6 mx-auto bg-white border border-gray-300 rounded-xl shadow-md space-y-4">
            {/* Action Buttons */}
            <div className="flex gap-4 justify-center">
                <button
                    onClick={() => {
                        setShowRejectModal(false);
                        setShowApproveModal(true);
                    }}
                    className="px-4 py-2 bg-green-400 text-white rounded-md hover:bg-green-500"
                >
                    Approve
                </button>

                <button
                    onClick={() => {
                        setShowApproveModal(false);
                        setShowRejectModal(true);
                    }}
                    className="px-4 py-2 bg-red-400 text-white rounded-md hover:bg-red-500"
                >
                    Reject
                </button>
            </div>

            {/* ================= APPROVE MODAL ================= */}
            {showApproveModal && (
                <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
                    <div className="bg-white w-[350px] p-5 rounded-md shadow-lg space-y-5">
                        <h2 className="text-lg font-semibold text-gray-700">
                            Confirm Approval
                        </h2>
                        <p className="text-gray-600">Are you sure you want to approve payment?</p>

                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setShowApproveModal(false)}
                                className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    setShowApproveModal(false);
                                    console.log("Payment Approved");
                                }}
                                className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                            >
                                Approve
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* ================= REJECT MODAL ================= */}
            {showRejectModal && (
                <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
                    <div className="bg-white w-[350px] p-5 rounded-md shadow-lg space-y-4">
                        <h2 className="text-lg font-semibold text-gray-700">
                            Reject Payment
                        </h2>

                        <textarea
                            className="w-full border border-gray-400 rounded-md p-2 text-sm focus:ring-1 focus:ring-red-400"
                            rows="3"
                            value={remark}
                            onChange={(e) => setRemark(e.target.value)}
                            placeholder="Remark for reject payment"
                        />

                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setShowRejectModal(false)}
                                className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    setShowRejectModal(false);
                                    console.log("Payment Rejected with Remark:", remark);
                                }}
                                className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                            >
                                Reject
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PaymentActionBox;
