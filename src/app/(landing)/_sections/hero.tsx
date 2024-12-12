import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { CircleArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <Container>
      <div className="w-full">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="text-5xl max-md:text-4xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-gray-900 dark:text-white text-center mb-5">
            <span>Boost your SEO with</span>
            <h1 className="base-gradient-text font-bold leading-tight tracking-tighter lg:leading-[1.1]">
              AI-Generated Alt Text
            </h1>
            <span>for Enhanced Accessibility</span>
          </div>
          <p className="text-center max-w-2xl mb-10 max-md:mb-5">
            Automatically generate accurate, keyword-rich alt text for every
            image, boosting search rankings while ensuring compliance with
            accessibility standards – all in seconds.
          </p>
        </div>
      </div>
      <div className="w-full flex max-md:flex-col gap-12">
        <div className="relative flex-1">
          <Image
            className="hero-image rounded-xl w-full h-[650px] max-md:h-[420px] object-cover"
            width={600}
            height={650}
            src="/hero-image-v2.jpg"
            alt="Mitzie organic multi-purpose surface cleaner in a brown bottle, designed for effective cleaning, displayed on a marble and copper stand."
          />
          <div className="hero-alt-text flex justify-center items-center">
            <p className="italic font-normal w-[350px] border rounded-lg bg-primary-foreground px-3 py-2">
              A.I : "Young woman holding{" "}
              <b className="base-gradient-text">
                Janssen Cosmetics Thermo Peel Mask Cranberry
              </b>
              , showcasing the product and its exfoliating benefits on her
              cheek."
            </p>
          </div>
        </div>
        <div className="p-12 max-md:p-0 flex-1">
          <h2 className="text-3xl font-semibold mb-3">
            Altmate: Beyond an Alt Text Generator
          </h2>
          <p>
            Transform how your content is perceived with AI-powered alt text
            that’s SEO-friendly, accessible, and crafted to boost visibility.
          </p>

          <ul className="my-4">
            <li className="flex items-center gap-2 mb-2">
              <CircleArrowRight color="#2cae76" size={20} />
              <p>
                <b>SEO-friendly</b> descriptions
              </p>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <CircleArrowRight color="#2cae76" size={20} />
              <p>
                <b>AI-powered</b> accessibility
              </p>
            </li>
            <li className="flex items-center gap-2">
              <CircleArrowRight color="#2cae76" size={20} />
              <p>
                Boosts <b>visibility</b>
              </p>
            </li>
          </ul>
          <p className="mb-12">
            Whether you’re an e-commerce store owner or a content creator,
            Altmate helps you stay ahead by making your images work smarter.
          </p>
          <Link href="/alt-texts/new">
            <Button>Start boosting your image now!</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
