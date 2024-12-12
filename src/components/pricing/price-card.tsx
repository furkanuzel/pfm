import type React from "react";
import { CheckoutButton } from "../stripe/upgrade-button/checkout-button";
import { BadgeCheck } from "lucide-react";

type Feature = {
  description: string;
  icon: React.ReactNode;
};

interface IProps {
  title: string;
  price: string;
  priceId: string;
  credit: string;
  features: Feature[];
  highlight?: boolean;
}

const PriceCard: React.FC<IProps> = ({
  title,
  price,
  priceId,
  features,
  credit,
  highlight,
}) => {
  const priceList = price.split(",");

  return (
    <div className="flex overflow-hidden relative flex-col w-full md:w-[23rem] p-6 text-gray-900 bg-white border xl:p-8 dark:bg-transparent dark:text-white">
      <div className="glow absolute -z-10 aspect-square w-full max-w-xl rounded-full bg-gradient-to-br from-blue-600/15 to-green-500/15 blur-3xl filter" />
      <div className="flex gap-3 items-center">
        <h3 className="text-xl font-semibold">{title}</h3>
        {highlight && (
          <span className="text-xs font-bold uppercase bg-teal-300 text-green-800 px-2 py-1 rounded-xl">
            Popular
          </span>
        )}
      </div>

      <div className="my-5">
        <div className="flex mb-1">
          <span className="text-4xl font-extrabold">${priceList[0]}</span>
          <span className="text-lg font-normal">{priceList[1]}</span>
        </div>
        <span className="text-sm">One-time payment. No subscription.</span>
      </div>

      <div className="mt-auto mb-6">
        <CheckoutButton priceId={priceId} className="w-full">
          Choose {title} package
        </CheckoutButton>
      </div>
      <div className="flex items-center gap-4">
        <ul>
          <ol className="flex gap-2 mb-3 text-sm">
            <BadgeCheck className="text-green-400 size-5" />
            <p>
              Get <b>{credit} credits</b> per purchase
            </p>
          </ol>
          {features.map((feature) => (
            <ol className="flex gap-2 mb-3 text-sm">
              {feature.icon}
              <p>{feature.description}</p>
            </ol>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PriceCard;
