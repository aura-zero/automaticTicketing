"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Ticket, Menu, X, HelpCircle } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-[#023047] text-white fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Ticket className="w-6 h-6 text-[#06d6a0]" />
            <span className="text-xl font-semibold">TicketSystem</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="/home" className="nav-link">
              Home
            </Link>
            <Link href="/tickets" className="nav-link">
              Tickets
            </Link>
            <Link href="/analytics" className="nav-link">
              Analysis
            </Link>
            <Link href="/help" className="nav-link">
              <HelpCircle className="w-4 h-4 inline mr-1" /> Help
            </Link>
            <a
              href="https://github.com/aura-zero/automaticTicketing.git"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              <GitHubLogoIcon className="w-5 h-5 inline mr-1" /> GitHub
            </a>
            <Link href="/chatbot" className="nav-link">
              <Button
                variant="default"
                className="bg-[#06d6a0] hover:bg-[#05c190] text-black text-sm font-semibold px-4 py-1 rounded"
              >
                Chat Bot
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-[#06d6a0] transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#023047]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/home" className="nav-link-mobile">
              Home
            </Link>
            <Link href="/tickets" className="nav-link-mobile">
              Tickets
            </Link>
            <Link href="/analytics" className="nav-link-mobile">
              Analytics
            </Link>
            <Link href="/help" className="nav-link-mobile">
              <HelpCircle className="w-4 h-4 inline mr-1" /> Help
            </Link>
            <a
              href="https://github.com/aura-zero/automaticTicketing.git"
              target="_blank"
              rel="noopener noreferrer"
              className="block nav-link-mobile"
            >
              <GitHubLogoIcon className="w-5 h-5 inline mr-1" /> GitHub
            </a>
            <Link href="/chatbot" className="block">
              <Button
                variant="default"
                className="w-full mt-2 bg-[#06d6a0] hover:bg-[#05c190] text-black text-sm font-semibold px-4 py-2 rounded"
              >
                Chat Bot
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
