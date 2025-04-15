import { CircleCheck } from "lucide-react";
import React from "react";

const PricingFeature = ({ feature }) => {
  return (
    <li className="flex items-start gap-2">
      <CircleCheck className="text-green-500 mt-1" size={16} />
      <span>{feature}</span>
    </li>
  );
};

export default PricingFeature;
