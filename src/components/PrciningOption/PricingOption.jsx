import React from "react";
import PricingFeature from "./PricingFeature";

const PricingOption = ({ pricing }) => {
  const { name, price, description, features } = pricing;

  return (
    <div className="card w-full sm:w-80 md:w-96 bg-base-100 shadow-sm hover:shadow-md transition duration-200 border-t-4 border-green-400">
      <div className="card-body">
        <span className="badge badge-warning w-fit text-xs">Most Popular</span>
        <div className="flex justify-between items-center">
          <h2 className="text-xl md:text-3xl font-bold">{name}</h2>
          <span className="text-md md:text-xl font-semibold">{price}</span>
        </div>
        <p className="bg-green-300 px-3 py-2 rounded-xl text-sm">
          {description}
        </p>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
          {features.map((feature, index) => (
            <PricingFeature key={index} feature={feature} />
          ))}
        </ul>
        <div className="mt-6">
          <button className="btn btn-primary btn-block">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default PricingOption;
