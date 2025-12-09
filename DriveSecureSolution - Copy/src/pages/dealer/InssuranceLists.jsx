import { Car, Search } from 'lucide-react'
import React from 'react'
import Card from '../../components/base/Card'
import Bredcrumb from '../../components/layout/Bredcrumb'
import InsuranceTable from '../../Tables/InsuranceTable'
import InputBox from '../../components/base/InputBox'
import Button from '../../components/base/Button'

const InssuranceLists = () => {

    const insuranceTableData = [
        {
            policyNo: "PLX55221",
            name: "Amit Sharma",
            vehicleType: "Bike",
            vehicleCapacity: "125cc",
            nominee: "Rohit Sharma",
            nomineeAge: 24,
            relation: "Brother",
        },
        {
            policyNo: "PLX76244",
            name: "Simran Kaur",
            vehicleType: "Car",
            vehicleCapacity: "1498cc",
            nominee: "Gurpreet Kaur",
            nomineeAge: 31,
            relation: "Mother",
        },
    ];

    return (
        <Card>
            <div className="text-xl font-semibold text-primary">
                <Bredcrumb heading="Insurances List" page="insurances_list" />
            </div>
            <div className='px-5 '>
                <div className='flex p-5 w-full bg-light rounded-xl border border-neutral-300 gap-5 justify-between max-[750px]:flex-wrap items-baseline-last '>
                    <InputBox className='w-full' placeholder='Search Policy' label=' ' />
                    <Button className='flex items-center gap-1'><Search size={16} />Search</Button>
                    <Button variant='secondary' className='flex items-center gap-1 '>Reset</Button>
                </div>
            </div>
            <div className='p-5'>
                <InsuranceTable data={insuranceTableData} />

            </div>
        </Card>
    )
}

export default InssuranceLists