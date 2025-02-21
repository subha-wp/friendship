/* eslint-disable @next/next/no-img-element */
"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { profiles } from "@/data/profiles";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";

export default function ProfilePage() {
  const { id } = useParams();
  const profile = profiles.find((p) => p.id === id);

  if (!profile) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-purple-600 pb-12">
      {/* Top Navigation */}
      <div className="p-4 flex items-center justify-between absolute top-0 left-1 z-20 w-full">
        <Button variant="ghost" size="icon" className="text-white" asChild>
          <Link href="/">
            <ArrowLeft className="h-6 w-6" />
          </Link>
        </Button>
      </div>

      {/* Profile Image and Basic Info */}
      <div className="relative h-[70vh]">
        <img
          src={profile.imageUrl}
          alt={profile.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
          <h1 className="text-white text-3xl font-bold mb-1">
            {profile.name}, {profile.age}
          </h1>
          <p className="text-white/90">{profile.location}</p>
          <div className="mt-4 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 inline-flex items-center">
            <div className="h-2 w-2 bg-purple-500 rounded-full mr-2" />
            <span className="text-white">{profile.matchPercentage}% Match</span>
          </div>
        </div>
      </div>

      {/* Profile Details */}
      <div className="p-6 space-y-6">
        <section>
          <h2 className="text-white text-xl font-semibold mb-3">About</h2>
          <p className="text-white/80">{profile.about}</p>
        </section>

        <section>
          <h2 className="text-white text-xl font-semibold mb-3">Interests</h2>
          <div className="flex flex-wrap gap-2">
            {profile.interests.map((interest, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-white/10 text-white backdrop-blur-sm flex items-center"
              >
                {interest.emoji} {interest.label}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
