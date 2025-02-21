/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PaymentDialog } from "./payment-dialog";

interface ProfileCardProps {
  id: string;
  name: string;
  age: number;
  location: string;
  imageUrl: string;
  matchPercentage?: number;
  isSubscribed?: boolean;
}

export function ProfileCard({
  id,
  name,
  age,
  location,
  imageUrl,
  matchPercentage,
  isSubscribed,
}: ProfileCardProps) {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  return (
    <Card className="relative mx-auto max-w-sm overflow-hidden rounded-3xl">
      <div className="absolute left-0 top-0 z-20 font-semibold rounded-full bg-white/90 px-2 py-1 text-xs">
        {matchPercentage}% Match
      </div>

      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-purple-500/20 to-purple-900/90" />
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={`${name}'s profile`}
          className="h-full w-full object-cover"
        />

        <div className="absolute bottom-0 left-0 z-10 w-full p-2 text-white">
          <div className="mb-1 font-semibold">
            {name}, {age}
          </div>
          <div className="text-sm font-medium uppercase tracking-wider text-white/75">
            {location}
          </div>

          {isSubscribed ? (
            <Button
              variant="default"
              className="mt-3 w-full font-semibold text-sm rounded-2xl uppercase"
            >
              <Link href={`/profile/${id}`}>Get Details</Link>
            </Button>
          ) : (
            <Button
              variant="secondary"
              className="mt-3 w-full font-semibold text-sm rounded-2xl text-purple-600"
              onClick={() => setIsPaymentOpen(true)}
            >
              Subscribe & Talk
            </Button>
          )}
        </div>
      </div>

      <PaymentDialog
        open={isPaymentOpen}
        onOpenChange={setIsPaymentOpen}
        profileId={id}
      />
    </Card>
  );
}
