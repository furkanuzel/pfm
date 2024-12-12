import { cn } from "@/lib/utils";
import type React from "react";

interface IProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const FeatureItem: React.FC<IProps> = ({
  title,
  description,
  icon,
  className,
}) => {
  return (
    <div className={cn("border p-8", className)}>
      <div className="flex items-center gap-2 mb-3">
        <div className="w-10 h-10 border rounded-lg flex justify-center items-center">
          {icon}
        </div>
        <span className="text-xl font-semibold">{title}</span>
      </div>
      <p className="text-muted-foreground max-w-md font-medium">
        {description}
      </p>
    </div>
  );
};

export default FeatureItem;
