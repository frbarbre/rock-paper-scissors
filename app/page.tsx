"use client";

import { Choices, FirstLoad } from "@/types";
import { resultFinder } from "@/utils/resultFinder";
import { useEffect } from "react";
import { useStore } from "./store";
import { shallow } from "zustand/shallow";
import { choices } from "@/data";
import Choice from "@/components/Choice";

export default function Home() {
  const [houseDecider, setHouseDecider] = useStore(
    (store) => [store.houseDecider, store.setHouseDecider],
    shallow
  );
  const [houseChoice, setHouseChoice] = useStore(
    (store) => [store.houseChoice, store.setHouseChoice],
    shallow
  );
  const userChoice = useStore((state) => state.userChoice);
  const setResult = useStore((state) => state.setResult);

  useEffect(() => {
    setHouseDecider(Math.floor(Math.random() * 5));
    sessionStorage.setItem("firstLoad", FirstLoad.true);
  }, []);

  useEffect(() => {
    if (houseDecider === 0) setHouseChoice(Choices.scissors);
    if (houseDecider === 1) setHouseChoice(Choices.paper);
    if (houseDecider === 2) setHouseChoice(Choices.rock);
    if (houseDecider === 3) setHouseChoice(Choices.lizard);
    if (houseDecider === 4) setHouseChoice(Choices.spock);
  }, [houseDecider]);

  useEffect(() => {
    resultFinder(userChoice, houseChoice, setResult);
    if (houseDecider !== null) {
      sessionStorage.setItem("houseDecider", houseDecider as string);
    }
  }, [userChoice]);

  return (
    <section className="bg-pentagon bg-contain bg-no-repeat h-[227px] w-[227px] md:h-[312px] md:w-[328px] relative my-[96px]">
      {choices.map((choice, index) => (
        <Choice key={choice.title} choice={choice} index={index} />
      ))}
    </section>
  );
}
