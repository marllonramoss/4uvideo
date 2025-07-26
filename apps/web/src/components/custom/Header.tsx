"use client";

import { Play, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/90 backdrop-blur-sm border-b border-zinc-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-white to-gray-300 text-zinc-900 shadow-lg">
              <Play className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-white">
              4U Video
            </span>
          </div>

          {/* Buy me a coffee button */}
          <Button
            variant="outline"
            size="sm"
            className="cursor-pointer gap-2 border-zinc-700 text-zinc-300 hover:bg-white hover:text-zinc-900 transition-colors"
            onClick={() => {
              window.open("https://buymeacoffee.com/marllondev", "_blank");
            }}
          >
            <Coffee className="w-4 h-4" />
            Buy me a coffee
          </Button>
        </div>
      </div>
    </header>
  );
} 