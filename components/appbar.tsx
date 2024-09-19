"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Ticket, Menu, X, HelpCircle } from "lucide-react";

const menuItems = [
  { name: "Home", href: "/home" },
  { name: "Tickets", href: "/tickets" },
  { name: "Analysis", href: "/analytics" },
  { name: "Help", href: "/help", icon: HelpCircle },
  {
    name: "GitHub",
    href: "https://github.com/aura-zero/automaticTicketing.git",
    icon: GitHubLogoIcon,
    external: true,
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#e6f3e6] text-[#0d1117] fixed top-0 left-0 w-full z-10 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Ticket className="w-6 h-6 text-[#0d1117]" />
            <span className="text-xl font-bold">TicketSystem</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium hover:text-[#06d6a0] transition-colors flex items-center"
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {item.icon && <item.icon className="w-4 h-4 inline mr-1" />}
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/chatbot">
                <Button
                  variant="default"
                  className="bg-[#0d1117] hover:bg-[#2d3748] text-white text-sm font-semibold px-4 py-2 rounded"
                >
                  Chat Bot
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="text-[#0d1117] hover:text-[#06d6a0] transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#e6f3e6]"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-[#0d1117] hover:text-[#06d6a0] transition-colors py-2 text-base font-medium"
                {...(item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <span className="flex items-center">
                  {item.icon && <item.icon className="w-4 h-4 inline mr-1" />}
                  {item.name}
                </span>
              </Link>
            ))}
            <Link href="/chatbot" className="block">
              <Button
                variant="default"
                className="w-full mt-2 bg-[#0d1117] hover:bg-[#2d3748] text-white text-sm font-semibold px-4 py-2 rounded"
              >
                Chat Bot
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
