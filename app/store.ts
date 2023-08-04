import { Store } from "@/types";
import { createWithEqualityFn } from "zustand/traditional";

export const useStore = createWithEqualityFn<Store>()(
  (set) => ({
    houseDecider: null,
    setHouseDecider: (houseDecider) =>
      set(() => ({ houseDecider: houseDecider })),
    houseChoice: "",
    setHouseChoice: (houseChoice) => set(() => ({ houseChoice: houseChoice })),
    userChoice: "",
    setUserChoice: (userChoice) => set(() => ({ userChoice: userChoice })),
    result: "",
    setResult: (result) => set(() => ({ result: result })),
    score: parseInt(sessionStorage.getItem("score") as string) | 0,
    setScore: (score) => set(() => ({ score: score })),
  }),
  Object.is
);
