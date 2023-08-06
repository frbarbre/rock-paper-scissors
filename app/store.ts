import { Choice, FirstLoad, Result, Store } from "@/types";
import { createWithEqualityFn } from "zustand/traditional";

export const useStore = createWithEqualityFn<Store>()(
  (set) => ({
    houseDecider: parseInt(
      sessionStorage.getItem("houseDecider") as string
    ) as number,
    setHouseDecider: (houseDecider) =>
      set(() => ({ houseDecider: houseDecider })),

    houseChoice: "",
    setHouseChoice: (houseChoice) => set(() => ({ houseChoice: houseChoice })),

    userChoice: sessionStorage.getItem("userChoice") as Choice | "",
    setUserChoice: (userChoice) => set(() => ({ userChoice: userChoice })),

    result: sessionStorage.getItem("result") as Result | "",
    setResult: (result) => set(() => ({ result: result })),

    score: parseInt(sessionStorage.getItem("score") as string) | 0,
    setScore: (score) => set(() => ({ score: score })),
  }),
  Object.is
);

