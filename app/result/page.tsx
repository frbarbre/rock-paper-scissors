"use client";

import { useStore } from "../store";
import { shallow } from "zustand/shallow";
import { FirstLoad, Result } from "@/types";
import { useEffect, useState } from "react";
import { userIndexFinder } from "@/utils/userIndexFinder";
import ResultChoice from "@/components/ResultChoice";
import ResultMessage from "@/components/ResultMessage";
import { motion as m } from "framer-motion";

export default function ResultPage() {
  const houseDecider = useStore((state) => state.houseDecider);
  const [score, setScore] = useStore(
    (store) => [store.score, store.setScore],
    shallow
  );
  const result = useStore((state) => state.result);
  const [userChoice, setUserChoice] = useStore(
    (store) => [store.userChoice, store.setUserChoice],
    shallow
  );

  const [userIndex] = useState(userIndexFinder(userChoice));
  const [isActive, setIsActive] = useState(false);

  const delay = 1;

  useEffect(() => {

    let firstLoad
    firstLoad = localStorage.getItem("firstLoad") as FirstLoad || ""

    if (firstLoad === FirstLoad.true) {
      setTimeout(() => {
        setIsActive(true);
      }, delay * 1000);
    } else {
      setIsActive(true);
    }
  }, []);

  useEffect(() => {
    let firstLoad
    firstLoad = localStorage.getItem("firstLoad") as FirstLoad || ""

    if (firstLoad === FirstLoad.true) {
      sessionStorage.setItem("firstLoad", FirstLoad.false);
      setTimeout(() => {
        if (result === Result.win) setScore(score + 1);
        if (result === Result.loss) setScore(score - 1);
        sessionStorage.setItem("result", result);
      }, delay * 1000);
    }
    // Making sure to set new value on each attempt to insure proper revalidation
    setUserChoice("");
  }, []);

  return (
    <div>
      <div className="flex md:gap-[72px] gap-[50px]">
        <div className="md:hidden">
          <ResultChoice isUser={true} index={userIndex} text={"You Picked"} />
        </div>
        <m.div
          className="hidden md:block"
          initial={{ x: 110 }}
          animate={{ x: isActive ? 0 : 110 }}
          transition={{ delay: 0.8 }}
        >
          <ResultChoice isUser={true} index={userIndex} text={"You Picked"} />
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 50 }}
          transition={{ delay: 1.5 }}
          className="self-center hidden md:block"
        >
          <ResultMessage result={result} delay={1.8} />
        </m.div>

        <div className="md:hidden">
          <ResultChoice
            index={houseDecider}
            text={"The House Picked"}
            isHouse={true}
            isActive={isActive}
          />
        </div>
        <m.div
          className="hidden md:block"
          initial={{ x: -110 }}
          animate={{ x: isActive ? 0 : -110 }}
          transition={{ delay: 0.8 }}
        >
          <ResultChoice
            index={houseDecider}
            text={"The House Picked"}
            isHouse={true}
            isActive={isActive}
          />
        </m.div>
      </div>
      <m.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 50 }}
        transition={{ delay: 0.8 }}
        className="md:hidden flex pt-[62px] justify-center"
      >
        <ResultMessage result={result} delay={1} />
      </m.div>
    </div>
  );
}
