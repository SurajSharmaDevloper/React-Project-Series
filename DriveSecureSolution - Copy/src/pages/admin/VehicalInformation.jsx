import React from 'react'
import Card from '../../components/base/Card'
import Bredcrumb from '../../components/layout/Bredcrumb'
import VehiclePriceTable from '../../Tables/VehiclePriceTable';


const VehicalInformation = () => {

    const dummyVehicleData = [
        {
            "Model Variant": "Swift LXI",
            "Ex Showroom price": "600000",
            "Insurance Amount": "20000",
            "Registration Amount": "45000",
            "TOTAL": "665000",
        },
        {
            "Model Variant": "Swift VXI",
            "Ex Showroom price": "700000",
            "Insurance Amount": "21000",
            "Registration Amount": "48000",
            "TOTAL": "769000",
        },
        {
            "Model Variant": "Baleno Sigma",
            "Ex Showroom price": "780000",
            "Insurance Amount": "22500",
            "Registration Amount": "52000",
            "TOTAL": "854500",
        },
        {
            "Model Variant": "Brezza ZXI+",
            "Ex Showroom price": "1080000",
            "Insurance Amount": "32000",
            "Registration Amount": "68000",
            "TOTAL": "1180000",
        },
        {
            "Model Variant": "WagonR VXI",
            "Ex Showroom price": "570000",
            "Insurance Amount": "18500",
            "Registration Amount": "42000",
            "TOTAL": "630500",
        },
        {
            "Model Variant": "Baleno Sigma",
            "Ex Showroom price": "780000",
            "Insurance Amount": "22500",
            "Registration Amount": "52000",
            "TOTAL": "854500",
        },
        {
            "Model Variant": "Brezza ZXI+",
            "Ex Showroom price": "1080000",
            "Insurance Amount": "32000",
            "Registration Amount": "68000",
            "TOTAL": "1180000",
        },
        {
            "Model Variant": "WagonR VXI",
            "Ex Showroom price": "570000",
            "Insurance Amount": "18500",
            "Registration Amount": "42000",
            "TOTAL": "630500",
        }, {
            "Model Variant": "Baleno Sigma",
            "Ex Showroom price": "780000",
            "Insurance Amount": "22500",
            "Registration Amount": "52000",
            "TOTAL": "854500",
        },
        {
            "Model Variant": "Brezza ZXI+",
            "Ex Showroom price": "1080000",
            "Insurance Amount": "32000",
            "Registration Amount": "68000",
            "TOTAL": "1180000",
        },
        {
            "Model Variant": "WagonR VXI",
            "Ex Showroom price": "570000",
            "Insurance Amount": "18500",
            "Registration Amount": "42000",
            "TOTAL": "630500",
        }, {
            "Model Variant": "Baleno Sigma",
            "Ex Showroom price": "780000",
            "Insurance Amount": "22500",
            "Registration Amount": "52000",
            "TOTAL": "854500",
        },
        {
            "Model Variant": "Brezza ZXI+",
            "Ex Showroom price": "1080000",
            "Insurance Amount": "32000",
            "Registration Amount": "68000",
            "TOTAL": "1180000",
        },
        {
            "Model Variant": "WagonR VXI",
            "Ex Showroom price": "570000",
            "Insurance Amount": "18500",
            "Registration Amount": "42000",
            "TOTAL": "630500",
        }, {
            "Model Variant": "Baleno Sigma",
            "Ex Showroom price": "780000",
            "Insurance Amount": "22500",
            "Registration Amount": "52000",
            "TOTAL": "854500",
        },
        {
            "Model Variant": "Brezza ZXI+",
            "Ex Showroom price": "1080000",
            "Insurance Amount": "32000",
            "Registration Amount": "68000",
            "TOTAL": "1180000",
        },
        {
            "Model Variant": "WagonR VXI",
            "Ex Showroom price": "570000",
            "Insurance Amount": "18500",
            "Registration Amount": "42000",
            "TOTAL": "630500",
        }, {
            "Model Variant": "Baleno Sigma",
            "Ex Showroom price": "780000",
            "Insurance Amount": "22500",
            "Registration Amount": "52000",
            "TOTAL": "854500",
        },
        {
            "Model Variant": "Brezza ZXI+",
            "Ex Showroom price": "1080000",
            "Insurance Amount": "32000",
            "Registration Amount": "68000",
            "TOTAL": "1180000",
        },
        {
            "Model Variant": "WagonR VXI",
            "Ex Showroom price": "570000",
            "Insurance Amount": "18500",
            "Registration Amount": "42000",
            "TOTAL": "630500",
        }, {
            "Model Variant": "Baleno Sigma",
            "Ex Showroom price": "780000",
            "Insurance Amount": "22500",
            "Registration Amount": "52000",
            "TOTAL": "854500",
        },
        {
            "Model Variant": "Brezza ZXI+",
            "Ex Showroom price": "1080000",
            "Insurance Amount": "32000",
            "Registration Amount": "68000",
            "TOTAL": "1180000",
        },
        {
            "Model Variant": "WagonR VXI",
            "Ex Showroom price": "570000",
            "Insurance Amount": "18500",
            "Registration Amount": "42000",
            "TOTAL": "630500",
        }, {
            "Model Variant": "Baleno Sigma",
            "Ex Showroom price": "780000",
            "Insurance Amount": "22500",
            "Registration Amount": "52000",
            "TOTAL": "854500",
        },
        {
            "Model Variant": "Brezza ZXI+",
            "Ex Showroom price": "1080000",
            "Insurance Amount": "32000",
            "Registration Amount": "68000",
            "TOTAL": "1180000",
        },
        {
            "Model Variant": "WagonR VXI",
            "Ex Showroom price": "570000",
            "Insurance Amount": "18500",
            "Registration Amount": "42000",
            "TOTAL": "630500",
        }, {
            "Model Variant": "Baleno Sigma",
            "Ex Showroom price": "780000",
            "Insurance Amount": "22500",
            "Registration Amount": "52000",
            "TOTAL": "854500",
        },
        {
            "Model Variant": "Brezza ZXI+",
            "Ex Showroom price": "1080000",
            "Insurance Amount": "32000",
            "Registration Amount": "68000",
            "TOTAL": "1180000",
        },
        {
            "Model Variant": "WagonR VXI",
            "Ex Showroom price": "570000",
            "Insurance Amount": "18500",
            "Registration Amount": "42000",
            "TOTAL": "630500",
        }
    ];



    return (
        <Card>
            <div className="text-xl font-semibold text-primary ">
                <Bredcrumb heading="Vehical Table" page="payment" />
            </div>
            <div className="p-5">
                <VehiclePriceTable initialData={dummyVehicleData} />
            </div>
        </Card>
    )
}

export default VehicalInformation