"use client";

import { useStore } from "@/app/store";
import { useEffect } from "react";

export default function Header() {
  const score = useStore((state) => state.score);

  useEffect(() => {
    sessionStorage.setItem("score", score.toString());
  }, [score]);

  return <header>Score: {score}</header>;
}
