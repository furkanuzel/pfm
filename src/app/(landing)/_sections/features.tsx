"use client";
import Container from "@/components/container";
import { FaqSection } from "./faq";
import FeatureItem from "@/components/features/feature-item";
import { Blocks, CodeXml, Layers } from "lucide-react";

export function FeaturesSection() {
  return (
    <section id="features">
      <Container>
        <h1 className="mb-5 leading-tight tracking-tighter text-center text-5xl max-md:text-4xl font-bold text-gray-900 dark:text-white">
          Designed to Deliver Perfect Alt Text, Every Time
        </h1>
        <p className="mb-6 max-w-3xl text-center w-full text-muted-foreground">
          Altmate offers all the tools you need to create accurate, SEO-friendly
          alt text effortlessly, ensuring your content is accessible and
          optimized every time.
        </p>
        <FaqSection />
        <h2 className="mb-5 leading-tight tracking-tighter text-center text-5xl max-md:text-4xl font-bold text-gray-900 dark:text-white">
          Features Under Development
        </h2>
        <p className="mb-6 max-w-3xl text-center w-full text-muted-foreground">
          Stay tuned as Altmate continues to evolve! We're constantly innovating
          to bring you cutting-edge features that enhance your alt text
          experience.
        </p>
        <Container>
          <div className="w-full grid grid-cols-3 gap-2 max-md:grid-cols-1">
            <FeatureItem
              title="CMS Integrations"
              description="Connect effortlessly with platforms like WordPress and Shopify to automate alt text generation directly from your CMS."
              icon={<Blocks size={20} />}
            />
            <FeatureItem
              title="API Support"
              description=" Integrate our powerful API to automate alt text creation within your existing systems for a seamless workflow."
              icon={<CodeXml size={20} />}
            />
            <FeatureItem
              title="Bulk Image Upload"
              description="Upload multiple images at once and generate alt text in bulk, perfect for managing large volumes of content efficiently."
              icon={<Layers size={20} />}
            />
          </div>
        </Container>
      </Container>
    </section>
  );
}
