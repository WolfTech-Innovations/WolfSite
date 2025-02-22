"use client";
import React from "react";

function NavBar() {
  return (
    <nav className="fixed w-full bg-black/50 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
        >
          WolfOS
        </a>
        <div className="flex gap-6">
          <a href="#home" className="text-white/80 hover:text-white transition">
            Home
          </a>
          <a
            href="#features"
            className="text-white/80 hover:text-white transition"
          >
            Features
          </a>
          <a
            href="#about"
            className="text-white/80 hover:text-white transition"
          >
            About
          </a>
        </div>
      </div>
    </nav>
  );
}

function NavBarStory() {
  return (
    <div className="min-h-screen bg-gray-900">
      <NavBar />
    </div>
  );
}

export default NavBar;