/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import Link from "next/link";

interface ProfileCardProps {
  id: string;
  name: string;
  age: number;
  location: string;
  imageUrl: string;
  matchPercentage?: number;
}

export function ProfileCard({
  id,
  name,
  age,
  location,
  imageUrl,
  matchPercentage = 100,
}: ProfileCardProps) {
  return (
    <Link href={`/profile/${id}`}>
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
          <div className="absolute bottom-0 left-0 z-10 w-full p-4 text-white">
            <div className="mb-1 text-xl font-semibold">
              {name}, {age}
            </div>
            <div className="text-sm font-medium uppercase tracking-wider text-white/75">
              {location}
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
