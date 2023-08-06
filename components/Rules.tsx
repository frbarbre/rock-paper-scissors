"use client";

import { useState } from "react";
import RuleBook from "./RuleBook";
import { AnimatePresence, motion as m } from "framer-motion";
import Button from "./Button";
import { useStore } from "@/app/store";

export default function Rules() {
  const [active, setActive] = useState(false);
  const setScore = useStore((state) => state.setScore);
  return (
    <>
      <div className="flex justify-center md:justify-between w-full gap-[32px]">
        <m.div
          initial={{ y: 150 }}
          animate={{ y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <Button handleClick={() => setScore(0)}>Reset</Button>
        </m.div>
        <m.div
          initial={{ y: 150 }}
          animate={{ y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <Button handleClick={() => setActive(!active)}>Rules</Button>
        </m.div>
      </div>
      <AnimatePresence>
        {active && <RuleBook setActive={setActive} />}
      </AnimatePresence>
    </>
  );
}
