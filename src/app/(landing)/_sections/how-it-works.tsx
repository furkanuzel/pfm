import Container from "@/components/container";
import FeatureItem from "@/components/features/feature-item";
import { Blocks } from "lucide-react";

export function HowItWorksSection() {
  return (
    <Container>
      <div className="w-full">
        <p className="mb-2 text-muted-foreground">Upload. Analyze. Generate.</p>
        <h2 className="text-4xl max-md:text-3xl font-bold mb-16">
          Effortless Alt Text Generation in Simple Steps
        </h2>
      </div>
      <div className="w-full grid grid-cols-3 max-md:grid-cols-1 gap-4">
        <FeatureItem
          className="border-l border-t"
          title="Upload your image"
          description="Begin by uploading your image, which can be your product, through
            our intuitive platform. This simple step allows you to initiate the
            alt text generation process seamlessly."
          icon={<Blocks size={20} />}
        />
        <FeatureItem
          className="border-l border-t"
          title="Let AI analyze your image"
          description="Once your image is uploaded, our advanced AI technology will analyze
            it thoroughly. This process ensures that all essential features and
            context are captured accurately."
          icon={<Blocks size={20} />}
        />
        <FeatureItem
          className="border-l border-t"
          title="Get your SEO-friendly alt text"
          description="After the analysis, you will receive alt text that is both
            customizable and SEO-friendly. This generated text enhances your
            website's accessibility while boosting its search engine visibility."
          icon={<Blocks size={20} />}
        />
      </div>
    </Container>
  );
}
