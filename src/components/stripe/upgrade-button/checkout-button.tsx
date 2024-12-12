"use client";

import type { ReactNode } from "react";
import { useServerAction } from "zsa-react";
import { LoaderButton } from "@/components/loader-button";
import { makePurchaseAction } from "@/app/middleware/purchase-middleware";

export function CheckoutButton({
  className,
  children,
  priceId,
}: {
  className?: string;
  children: ReactNode;
  priceId: string;
}) {
  const { execute, isPending } = useServerAction(makePurchaseAction);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        execute({ priceId });
      }}
    >
      <LoaderButton isLoading={isPending} className={className}>
        {children}
      </LoaderButton>
    </form>
  );
}
