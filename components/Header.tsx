"use client";

import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useNavigation } from "@/lib/context/navigation";

export default function Header() {
  const { setIsMobileNavOpen } = useNavigation();

  return (
    <header className="border-b border-slate-800/50 bg-slate-900/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileNavOpen(true)}
            className="md:hidden text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
          >
            <HamburgerMenuIcon className="h-5 w-5" />
          </Button>
          <div className="font-semibold bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
            Chat with Sandra
          </div>
        </div>
        <div className="flex items-center">
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox:
                  "h-8 w-8 ring-2 ring-slate-700/50 ring-offset-2 ring-offset-slate-900 rounded-full transition-shadow hover:ring-slate-600/50",
              },
            }}
          />
        </div>
      </div>
    </header>
  );
}