import React from 'react'
import Card from '../../components/base/Card'
import Bredcrumb from '../../components/layout/Bredcrumb'
import InputBox from '../../components/base/InputBox'
import Button from '../../components/base/Button'
import { Plus, Search } from 'lucide-react'
import CancellationListTable from '../../Tables/CancellationListTable'

const CancellationList = () => {
    const documentTableData = [
        {
            remark: "Documents received",
            dealerLetter: "dealer_letter.pdf",
            aadharFront: "aadhar_front.jpg",
            aadharBack: "aadhar_back.jpg",
            panCard: "pancard.jpg",
            policyCopy: "policy.pdf",
        },
        {
            remark: "Pending Aadhar Upload",
            dealerLetter: "dealer_letter_2.pdf",
            aadharFront: "dad",
            aadharBack: "dafgaf",
            panCard: "pancard_2.jpg",
            policyCopy: "policy_2.pdf",
        },
    ];

    return (
        <Card>
            <div className="text-xl font-semibold text-primary">
                <Bredcrumb heading="Cancellation List" page="cancellation_list" />
            </div>
            <div className='px-5 '>
                <div className='flex p-5 w-full bg-light rounded-xl border border-neutral-300 gap-5 justify-between max-[750px]:flex-wrap items-baseline-last '>
                    <InputBox className='w-full' placeholder='Search Remarks' label='' />
                    <Button className='flex items-center gap-1'><Search size={16} />Search</Button>
                    <Button variant='secondary' className='flex items-center gap-1 '>Reset</Button>
                </div>
            </div>

            <div className='p-5'>
                <CancellationListTable data={documentTableData} />
            </div>
        </Card>
    )
}

export default CancellationList