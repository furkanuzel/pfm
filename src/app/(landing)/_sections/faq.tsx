import Container from "@/components/container";
import FeatureItem from "@/components/features/feature-item";
import {
  CircleDollarSign,
  Clock,
  FilePenLine,
  Globe,
  LayoutDashboard,
  Sparkles,
} from "lucide-react";

export function FaqSection() {
  return (
    <Container>
      <div className="w-full grid grid-cols-3 gap-2 max-md:grid-cols-1">
        <FeatureItem
          title="AI-Powered"
          description="Generates alt texts using the advanced AI capabilities of ChatGPT."
          icon={<Sparkles size={20} />}
        />
        <FeatureItem
          title="Affordable Prices"
          description="Our service provides an economical solution for businesses and
              individuals looking to enhance their content with effective alt
              text."
          icon={<CircleDollarSign size={20} />}
        />
        <FeatureItem
          title="Multi-language"
          description="Allowing users to generate alt text in various languages, making
              your content accessible to a global audience."
          icon={<Globe size={20} />}
        />
        <FeatureItem
          title="Fast Processing"
          description="Quickly generate alt text for your images, enhancing efficiency
              without sacrificing quality."
          icon={<Clock size={20} />}
        />
        <FeatureItem
          title="Customizable Alt Text"
          description="Easily edit and tailor the generated alt text to meet your
              specific needs, ensuring it aligns perfectly with your content."
          icon={<FilePenLine size={20} />}
        />
        <FeatureItem
          title="User-Friendly Interface"
          description="Enjoy an intuitive and straightforward design that makes uploading
              images and generating alt text a breeze for everyone."
          icon={<LayoutDashboard size={20} />}
        />
      </div>
    </Container>
  );
}
