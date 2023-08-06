"use client";

import { Choice, Result, Store } from "@/types";
import { createWithEqualityFn } from "zustand/traditional";

let houseDeciderKey: string | null;
let userChoice: Choice | null | string;
let result: Result | null | string;
let score: string | null;

if (typeof window !== "undefined") {
  houseDeciderKey = sessionStorage.getItem("houseDecider");
  userChoice = sessionStorage.getItem("userChoice");
  result = sessionStorage.getItem("result");
  score = sessionStorage.getItem("score");
}

export const useStore = createWithEqualityFn<Store>()(
  (set) => ({
    houseDecider: parseInt(houseDeciderKey as string) as number,
    setHouseDecider: (houseDecider) =>
      set(() => ({ houseDecider: houseDecider })),

    houseChoice: "",
    setHouseChoice: (houseChoice) => set(() => ({ houseChoice: houseChoice })),

    userChoice: userChoice as Choice | "",
    setUserChoice: (userChoice) => set(() => ({ userChoice: userChoice })),

    result: result as Result | "",
    setResult: (result) => set(() => ({ result: result })),

    score: parseInt(score as string) | 0,
    setScore: (score) => set(() => ({ score: score })),
  }),
  Object.is
);
