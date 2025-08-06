"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HackathonHero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-primary/10 to-secondary/10 p-8 text-center">
      {/* Optional background illustration */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="400" cy="300" r="300" fill="url(#paint0_linear)" />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="400"
              y1="0"
              x2="400"
              y2="600"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6366F1" stopOpacity="0.2" />
              <stop offset="1" stopColor="#A78BFA" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <h1 className="relative text-5xl font-extrabold tracking-tight text-primary mb-4">
        AGI House Emergency Hackathon
      </h1>
      <p className="relative text-xl text-foreground/80 max-w-2xl mb-6">
        Build the future of AI safety in 48 hours. Join innovators, researchers,
        and creators to prototype emergency‑response tools for AGI.
      </p>

      <Button asChild className="relative px-8 py-3 text-lg font-medium">
        <Link to="/register">Register Now</Link>
      </Button>
    </section>
  );
};