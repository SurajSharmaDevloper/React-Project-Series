import React from 'react'
import Card from '../../components/base/Card'
import ClaimStatusTable from '../../Tables/ClaimsTable';
import Bredcrumb from '../../components/layout/Bredcrumb';
import InputBox from '../../components/base/InputBox';
import Button from '../../components/base/Button';
import { Plus, Search } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Claims = () => {
    const claimData = [
        {
            policyNo: "2215003",
            customerName: "R Agarwall",
            claimIntimationDate: "6/10/2025",
            status: "Intimated",
            claimNo: "IND5424",
            surveyorName: "Tushar Saha",
            contactNo: "9620254840",
            reportStatus: "Submitted",
            settlementStatus: "Settled",
            paymentStatus: "Paid with UTR - SBIN0004342443 on 03/11/2025"
        },
        {
            policyNo: "58385835",
            customerName: "Shardul Sarma",
            claimIntimationDate: "29/11/2025",
            status: "On process",
            claimNo: "On process",
            surveyorName: "On process",
            contactNo: "On process",
            reportStatus: "-",
            settlementStatus: "-",
            paymentStatus: "-"
        }
    ];

    return (
        <Card>
            <div className="text-xl font-semibold text-primary">
                <Bredcrumb heading="Claims" page="claims_list" />
            </div>
            <div className='px-5 '>
                <div className='flex py-5 px-5 bg-light rounded-xl border border-neutral-300 w-full gap-5 justify-between max-[750px]:flex-wrap items-baseline-last '>
                    <InputBox className='w-full' placeholder='Search Claims' label='' />
                    <Button className='flex items-center gap-1'><Search size={16} />Search</Button>
                    <Button variant='secondary'><NavLink to="/add_new_claim" className='flex items-center gap-1 '><Plus size={16} /> Add New Claim</NavLink></Button>
                </div>
            </div>

            <div className='p-5'>
                <ClaimStatusTable data={claimData} />
            </div>
        </Card>
    )
}

export default Claims