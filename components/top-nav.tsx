import { BellIcon } from "lucide-react";
import React from "react";

export default function Topnav() {
  return (
    <div className="flex justify-between h-12">
      <h2 className="font-bold text-2xl tracking-wide text-purple-600">
        Friendzy
      </h2>
      <p className="text-purple-600">
        <BellIcon />
      </p>
    </div>
  );
}
