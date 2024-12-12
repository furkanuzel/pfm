import Container from "@/components/container";
import PriceCard from "@/components/pricing/price-card";
import {
  WandSparkles,
  ALargeSmall,
  Banknote,
  CalendarCheck,
} from "lucide-react";

const Pricing = () => {
  const basicFeatures = [
    {
      description: "Generate alt text for up to 200 images",
      icon: <ALargeSmall size={20} />,
    },
    {
      description: "One-time Payment",
      icon: <Banknote size={20} />,
    },
    {
      description: "No expiration",
      icon: <CalendarCheck size={20} />,
    },
    {
      description: "Instant Access",
      icon: <WandSparkles size={20} />,
    },
  ];
  const standardFeatures = [
    {
      description: "Generate alt text for up to 800 images",
      icon: <ALargeSmall size={20} />,
    },
    {
      description: "One-time Payment",
      icon: <Banknote size={20} />,
    },
    {
      description: "Best for growing needs",
      icon: <CalendarCheck size={20} />,
    },
    {
      description: "Instant Access",
      icon: <WandSparkles size={20} />,
    },
  ];
  const premiumFeatures = [
    {
      description: "Generate alt text for up to 1,600 images",
      icon: <ALargeSmall size={20} />,
    },
    {
      description: "One-time Payment",
      icon: <Banknote size={20} />,
    },
    {
      description: "Maximum Savings",
      icon: <CalendarCheck size={20} />,
    },
    {
      description: "Instant Access",
      icon: <WandSparkles size={20} />,
    },
  ];

  return (
    <section id="pricing">
      <Container>
        <h1 className="mb-5 leading-tight tracking-tighter text-center text-5xl max-md:text-4xl font-bold text-gray-900 dark:text-white">
          Simple One-Time Payment Plans
        </h1>
        <p className="mb-6 max-w-3xl text-center w-full text-muted-foreground">
          Choose from three flexible packages with no recurring fees—pay once,
          use for life. <br className="hidden md:block" /> Start your journey
          today and achieve your goals!
        </p>
        <div className="flex gap-4 items-center mb-14">
          <WandSparkles size={18} />
          <p>
            You use <b>1 credit</b> each time you generate alt text with our
            service.
          </p>
        </div>

        <div className="grid grid-cols-3 max-md:grid-cols-1 justify-center w-full gap-12">
          <PriceCard
            title="Basic"
            price="7,90"
            priceId={"549960"}
            credit={"200"}
            features={basicFeatures}
          />

          <PriceCard
            title="Standard"
            price="29,90"
            priceId={"552257"}
            credit={"800"}
            features={standardFeatures}
            highlight={true}
          />

          <PriceCard
            title="Premium"
            price="56,90"
            priceId={"552258"}
            credit={"1,600"}
            features={premiumFeatures}
          />
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
