import React from 'react'
import Card from '../../components/base/Card'
import Bredcrumb from '../../components/layout/Bredcrumb'
import Button from '../../components/base/Button'
import InputBox from '../../components/base/InputBox'
import DropdownBox from '../../components/base/DropdownBox'
import { FileInput } from 'lucide-react'
import DateInputBox from '../../components/base/DateInputBox'

const AddNewClaim = () => {
    return (
        <Card>
            <div className="text-xl font-semibold text-primary">
                <Bredcrumb heading="Add New Claim" page="Add New Claim" />
            </div>
            <div className="px-5 py-2 ">
                <div className="mb-6 ">
                    <div className="space-y-4 rounded-xl px-5 py-4 bg-light">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <InputBox placeholder='Enter Policy Number' label='Policy Number' />
                            <InputBox placeholder='Enter Customer Name' label='Customer Name' />
                        </div>
                    </div>
                </div>
                <div className="mb-6 ">
                    <div className="space-y-4 rounded-xl px-5 py-4 bg-light">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <DateInputBox placeholder='Enter Date of Claim' label='Date of Claim' />
                            <DropdownBox
                                label="Status"
                                required
                                placeholder="Select Status"

                                options={[
                                    { label: "Intimate", value: "intimate" },
                                    { label: "On Process", value: "onprocess" },
                                    { label: "Other", value: "other" },
                                ]}
                            />
                        </div>
                    </div>
                </div>
                <div className="mb-6 ">
                    <div className="space-y-4 rounded-xl px-5 py-4 bg-light">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <InputBox placeholder='Enter Claim No' label='Claim Number' />
                            <InputBox placeholder='Enter Surveyor Name' label='Surveyor Name' />
                            <InputBox placeholder='Enter Contact Number' label='Contact Number' />
                            <DropdownBox
                                label="Report Status"
                                required
                                placeholder="Select Report Status"

                                options={[
                                    { label: "Submitted", value: "submitted" },
                                    { label: "Pending", value: "pending" },
                                    { label: "Other", value: "other" },
                                ]}
                            />

                        </div>
                    </div>
                </div>

                {/* Nominee Details */}
                <div className="mb-6 ">
                    <div className="space-y-4 rounded-xl px-5 py-4 bg-light">

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <DropdownBox
                                label="Settlment Status"
                                required
                                placeholder="Select Settlment Status"
                                options={[
                                    { label: "Settled", value: "settled" },
                                    { label: "Pending", value: "pending" },
                                    { label: "Submitted", value: "submitted" },
                                ]}
                            />
                            <DropdownBox
                                label="Payment Status"
                                required
                                placeholder="Select payment status"

                                options={[
                                    { label: "Paid with UTR {reff No } on {date}", value: "Paid with UTR {reff No } on {date}" },
                                    { label: "Other", value: "other" },
                                ]}
                            />
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4 border-t border-gray-700 mb-5 flex justify-end">
                    <Button
                        className="bg-[#e36e53] hover:bg-[#d45f46] active:ring-2 active:ring-[#e36e53]/50 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200"
                        size="small"
                        variant="primary"
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </Card>
    )
}

export default AddNewClaim