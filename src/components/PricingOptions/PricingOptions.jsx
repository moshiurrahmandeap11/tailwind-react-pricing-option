import React, { useEffect, useState } from "react";
import PricingOption from "../PrciningOption/PricingOption";

const PricingOptions = () => {
  const [pricing, setPricing] = useState([]);

  useEffect(() => {
    fetch("./pricing.json")
      .then((res) => res.json())
      .then((data) => setPricing(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-center text-2xl md:text-5xl font-bold mb-10">
        Our Premium Plans
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {pricing.map((pricing) => (
          <PricingOption key={pricing.id} pricing={pricing} />
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;
