/* eslint-disable @next/next/no-img-element */
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { profiles } from "@/data/profiles";
import { validateRequest } from "@/lib/auth";

// Simulated user data - In a real app, this would come from your auth system
const userData = {
  selectedProfiles: ["2", "4", "5"], // IDs of selected profiles
};

export default async function UserProfilePage() {
  const { user } = await validateRequest();

  const userName = user?.name ? user.name : "Anonymous";

  const selectedProfiles = profiles.filter((profile) =>
    userData.selectedProfiles.includes(profile.id)
  );

  return (
    <div className="min-h-screen bg-gradient-to-b pb-12 from-purple-900 to-purple-600">
      {/* Top Navigation */}
      <div className="p-4 flex items-center justify-between">
        <Button variant="ghost" size="icon" className="text-white" asChild>
          <Link href="/">
            <ArrowLeft className="h-6 w-6" />
          </Link>
        </Button>
      </div>

      {/* User Profile Header */}
      <div className="px-6 py-8">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full bg-purple-300 flex items-center justify-center text-2xl font-bold text-purple-900">
            {userName
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">{userName}</h1>
            <p className="text-white/80 text-xs">ID: {user?.id}</p>
          </div>
        </div>
      </div>

      {/* Selected Profiles Section */}
      <div className="p-6">
        <h2 className="text-xl font-semibold text-white mb-4">
          Selected Profiles ({selectedProfiles.length})
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {selectedProfiles.map((profile) => (
            <div
              key={profile.id}
              className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden"
            >
              <Link href={`/profile/${profile.id}`}>
                <div className="flex items-center p-4">
                  <img
                    src={profile.imageUrl}
                    alt={profile.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-white font-semibold">
                      {profile.name}, {profile.age}
                    </h3>
                    <p className="text-white/70">{profile.location}</p>
                  </div>
                  <div className="ml-auto">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm text-white">
                      {profile.matchPercentage}% Match
                    </div>
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <p className="text-white/60 text-sm line-clamp-2">
                    {profile.about}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {profile.interests.slice(0, 3).map((interest, index) => (
                      <span
                        key={index}
                        className="text-sm px-3 py-1 rounded-full bg-white/10 text-white/90 backdrop-blur-sm"
                      >
                        {interest.emoji} {interest.label}
                      </span>
                    ))}
                    {profile.interests.length > 3 && (
                      <span className="text-sm px-3 py-1 rounded-full bg-white/10 text-white/90 backdrop-blur-sm">
                        +{profile.interests.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
