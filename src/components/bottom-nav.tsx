import type React from "react";
import Link from "next/link";
import { Home, Compass, Plus, Users2, MessageCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface BottomNavProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

export function BottomNav({ className, ...props }: BottomNavProps) {
  return (
    <nav
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around bg-purple-600/80 px-4 backdrop-blur-md",
        "mx-auto max-w-lg rounded-full border border-purple-400/20",
        "bottom-4",
        className
      )}
      {...props}
    >
      <Button
        variant="ghost"
        size="icon"
        className="text-white hover:bg-purple-500/20"
        asChild
      >
        <Link href="/">
          <Home className="h-6 w-6" />
          <span className="sr-only">Home</span>
        </Link>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="text-white hover:bg-purple-500/20"
        asChild
      >
        <Link href="/explore">
          <Compass className="h-6 w-6" />
          <span className="sr-only">Explore</span>
        </Link>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="text-white hover:bg-purple-500/20"
        asChild
      >
        <Link href="/new">
          <Plus className="h-6 w-6" />
          <span className="sr-only">New Post</span>
        </Link>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="text-white hover:bg-purple-500/20"
        asChild
      >
        <Link href="/groups">
          <Users2 className="h-6 w-6" />
          <span className="sr-only">Groups</span>
        </Link>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="text-white hover:bg-purple-500/20"
        asChild
      >
        <Link href="/messages">
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">Messages</span>
        </Link>
      </Button>
    </nav>
  );
}
