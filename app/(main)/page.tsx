/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { ProfileCard } from "@/components/profile-card";
import Topnav from "@/components/top-nav";
import { profiles } from "@/data/profiles";
import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const { user } = await validateRequest();

  if (!user) {
    redirect("/login");
  }
  return (
    <div className="min-h-screen bg-purple-50 p-4 pb-12 relative">
      <Topnav />

      <div className="mx-auto grid max-w-6xl gap-4 grid-cols-2 md:grid-cols-4">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            id={profile.id}
            name={profile.name}
            age={profile.age}
            location={profile.location}
            distance={profile.distance}
            imageUrl={profile.imageUrl}
            matchPercentage={profile.matchPercentage}
          />
        ))}
      </div>
    </div>
  );
}
