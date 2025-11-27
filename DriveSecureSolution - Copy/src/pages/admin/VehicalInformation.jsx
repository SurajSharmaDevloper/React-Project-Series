import React from 'react'
import Card from '../../components/base/Card'
import Bredcrumb from '../../components/layout/Bredcrumb'
import VehiclePriceTable from '../../Tables/VehiclePriceTable';



const VehicalInformation = () => {
    const pricingData = [
        {
            "Model Variant": "ACTIVA STD-OBD2",
            "Ex Showroom price": "76,108",
            "Insurance Amount": "6,845",
            "Registration Amount": "6,706",
            "TOTAL": "89,659",
        },
    ];

return (
    <Card>
        <div className="text-xl font-semibold text-primary ">
            <Bredcrumb heading="Vehical Table" page="payment" />
        </div>
        <div className="p-5">
            <VehiclePriceTable data={pricingData} />
        </div>
    </Card>
)
}

export default VehicalInformation