"use client";
import { useEffect, useState } from "react";

import { ReloadIcon } from "@radix-ui/react-icons";
import { track } from "@vercel/analytics/react";
import { toast } from "../components/ui/use-toast";
import { Button } from "../components/ui/button";
import { SkillSyncLogo } from "../components/logo-adjustable";
import HeroText from "../components/hero-text";
import FeatureText from "../components/feature-stills";
import ContinueButton from "../components/continue-button";
import { Input } from "../components/ui/input";

export default function SiteEmail() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  async function submitEmail() {
    track("Attempted Email Submit");

    if (!email || email.trim() === "") {
      toast({
        variant: "destructive",
        title: "Invalid email address",
        description: "Please enter a valid email address",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Joined waitlist",
          description: "We'll reach out to see if you're a fit",
        });
      } else {
        toast({
          variant: "destructive",
          title: "An error occurred",
          description: data.error || "Try again later",
        });
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: "Try again later",
      });
    }

    setLoading(false);
  }

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <SkillSyncLogo className="py-24 my-12" size="medium" />
        <div className="flex flex-col items-center p-8 rounded-3xl border-[0.5px] border-gray-2 from-gray-100/2 to-[#DADADA]">
          <div className="text-center pb-4">
            enter your info to be featured in a tiktok
          </div>
          <div className="flex flex-row gap-2">
            <Input
              id="email"
              placeholder="email@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {!loading ? (
              <Button onClick={submitEmail}> submit </Button>
            ) : (
              <Button disabled>
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            )}
          </div>
        </div>
        <div className="py-24 my-24 text-zinc-400">contact</div>
      </main>
    </>
  );
}
