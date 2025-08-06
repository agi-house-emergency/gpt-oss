"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const events = [
  {
    time: "09:00 AM",
    title: "Opening Remarks",
    description: "Welcome, agenda, and rules.",
  },
  {
    time: "10:00 AM",
    title: "Team Formation",
    description: "Find teammates and define your project scope.",
  },
  {
    time: "12:00 PM",
    title: "Lunch Break",
    description: "Free food and networking.",
  },
  {
    time: "02:00 PM",
    title: "Mid‑Hack Check‑in",
    description: "Progress updates and mentor Q&A.",
  },
  {
    time: "06:00 PM",
    title: "Dinner & Demo Prep",
    description: "Final touches before presentations.",
  },
  {
    time: "08:00 PM",
    title: "Final Presentations",
    description: "Showcase your solution to the judges.",
  },
  {
    time: "09:30 PM",
    title: "Awards & Closing",
    description: "Prizes, feedback, and next steps.",
  },
];

export const HackathonSchedule = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4">
        <Card>
          <CardHeader className="bg-primary/10">
            <CardTitle className="text-2xl text-center">Event Schedule</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 py-6">
            {events.map((ev) => (
              <div
                key={ev.time}
                className="flex items-start gap-4 border-b pb-3 last:border-b-0"
              >
                <div className="w-24 text-sm font-medium text-primary">
                  {ev.time}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{ev.title}</h3>
                  <p className="text-sm text-foreground/70">{ev.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};