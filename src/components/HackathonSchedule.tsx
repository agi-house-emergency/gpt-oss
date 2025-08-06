"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const events = [
  {
    time: "6:00 PM",
    title: "Arrival, Announcements",
    description: "",
  },
  {
    time: "6:20 PM",
    title: "OpenAI's Dmitry Pimenov on gpt‑oss",
    description: "",
  },
  {
    time: "6:30 PM",
    title: "Groq on lightning‑fast gpt‑oss inference",
    description: "",
  },
  {
    time: "6:45 PM",
    title: "Code up gpt‑oss apps",
    description: "",
  },
  {
    time: "7:30 PM",
    title: "Dinner",
    description: "",
  },
  {
    time: "10:00 PM",
    title: "Demos!!",
    description: "",
  },
  {
    time: "10:50 PM",
    title: "Judging & Award Announcements",
    description: "",
  },
  {
    time: "11:00 PM",
    title: "Adjourn",
    description: "",
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
                  {ev.description && (
                    <p className="text-sm text-foreground/70">{ev.description}</p>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};