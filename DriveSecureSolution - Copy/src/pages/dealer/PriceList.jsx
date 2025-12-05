import React from "react";
import VehiclePriceList from "../../Tables/VehiclePriceList";
import Bredcrumb from "../../components/layout/Bredcrumb";
import Card from "../../components/base/Card";

const PriceList = () => {
  const sampleData = [
    { make: "Honda", model: "City", idv: "8,50,000", premium: "18,500" },
    { make: "Hyundai", model: "Creta", idv: "11,00,000", premium: "23,400" },
    { make: "Maruti", model: "Swift", idv: "6,00,000", premium: "12,800" },
    { make: "Maruti", model: "Swift", idv: "6,00,000", premium: "12,800" },
    { make: "Maruti", model: "Swift", idv: "6,00,000", premium: "12,800" },
    { make: "Maruti", model: "Swift", idv: "6,00,000", premium: "12,800" },
    { make: "Maruti", model: "Swift", idv: "6,00,000", premium: "12,800" },
    { make: "Maruti", model: "Swift", idv: "6,00,000", premium: "12,800" },
    { make: "Maruti", model: "Swift", idv: "6,00,000", premium: "12,800" },
    { make: "Maruti", model: "Swift", idv: "6,00,000", premium: "12,800" },
    { make: "Maruti", model: "Swift", idv: "6,00,000", premium: "12,800" },
    { make: "Maruti", model: "Swift", idv: "6,00,000", premium: "12,800" },
    { make: "Maruti", model: "Swift", idv: "6,00,000", premium: "12,800" },
    { make: "Maruti", model: "Swift", idv: "6,00,000", premium: "12,800" },
    { make: "Maruti", model: "Swift", idv: "6,00,000", premium: "12,800" },
    { make: "Maruti", model: "Swift", idv: "6,00,000", premium: "12,800" },
  ];

  return (
    <Card>
      {/* Breadcrumb Header */}
      <div className="text-xl font-semibold text-primary mt-2">
        <Bredcrumb heading="Price List" page="Price List" />
      </div>

      {/* Table Section */}
      <div className="px-8 py-3 mb-5">
        <VehiclePriceList data={sampleData} />
      </div>
    </Card>
  );
};

export default PriceList;
