/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { validateRequest } from "@/lib/auth";
import Link from "next/link";

interface ProfileCardProps {
  id: string;
  name: string;
  age: number;
  location: string;
  imageUrl: string;
  matchPercentage?: number;
}

export async function ProfileCard({
  id,
  name,
  age,
  location,
  imageUrl,
  matchPercentage = 100,
}: ProfileCardProps) {
  const { user } = await validateRequest();
  const isSubscribe = user?.subscribe;

  return (
    <Card className="relative mx-auto max-w-sm overflow-hidden rounded-3xl">
      {/* Match Label */}
      <div className="absolute left-0 top-0 z-20 font-semibold rounded-full bg-white/90 px-2 py-1 text-xs">
        {matchPercentage}% Match
      </div>

      {/* Main Image with Gradient Overlay */}
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-purple-500/20 to-purple-900/90" />
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={`${name}'s profile`}
          className="h-full w-full object-cover"
        />

        {/* Profile Info Overlay */}
        <div className="absolute bottom-0 left-0 z-10 w-full p-2 text-white">
          <div className="mb-1 text-xl font-semibold">
            {name}, {age}
          </div>
          <div className="text-sm font-medium uppercase tracking-wider text-white/75">
            {location}
          </div>

          {/* Button - Conditional Rendering */}
          {isSubscribe ? (
            <Button
              variant="default"
              className="mt-3 w-full font-semibold text-sm rounded-2xl uppercase"
            >
              <Link href={`/profile/${id}`}>Get Details</Link>
            </Button>
          ) : (
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="secondary"
                  className="mt-3 w-full font-semibold text-sm rounded-2xl text-purple-600"
                >
                  Subscribe & Talk
                </Button>
              </DialogTrigger>
              <DialogContent className="text-center p-6">
                <DialogTitle className="text-lg font-semibold">
                  Payment Form
                </DialogTitle>
                <p className="text-gray-600">
                  Implement your payment form here.
                </p>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </Card>
  );
}
