import type React from "react";
import { cn } from "@/lib/utils";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

const Wrapper = ({
  as: Component = "section",
  className,
  children,
  ...restProps
}: BoundedProps) => {
  return (
    <Component
      className={cn("px-5 py-5 md:px-6 md:py-6 lg:py-10", className)}
      {...restProps}
    >
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </Component>
  );
};

export default Wrapper;
