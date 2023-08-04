"use client";

import { Choices } from "@/types";
import { resultFinder } from "@/utils/resultFinder";
import { useEffect } from "react";
import { useStore } from "./store";
import { shallow } from "zustand/shallow";
import Link from "next/link";

export default function Home() {
  const [houseDecider, setHouseDecider] = useStore(
    (store) => [store.houseDecider, store.setHouseDecider],
    shallow
  );
  const [houseChoice, setHouseChoice] = useStore(
    (store) => [store.houseChoice, store.setHouseChoice],
    shallow
  );
  const [userChoice, setUserChoice] = useStore(
    (store) => [store.userChoice, store.setUserChoice],
    shallow
  );
  const setResult = useStore((state) => state.setResult);

  useEffect(() => {
    setHouseDecider(Math.floor(Math.random() * 5));
  }, []);

  useEffect(() => {
    if (houseDecider === 0) setHouseChoice(Choices.rock);
    if (houseDecider === 1) setHouseChoice(Choices.paper);
    if (houseDecider === 2) setHouseChoice(Choices.scissors);
    if (houseDecider === 3) setHouseChoice(Choices.lizard);
    if (houseDecider === 4) setHouseChoice(Choices.spock);
  }, [houseDecider]);

  useEffect(() => {
    resultFinder(userChoice, houseChoice, setResult);
  }, [userChoice]);

  return (
    <main>
      <div className="flex flex-col">
        <Link href={"/result"} onClick={() => setUserChoice(Choices.rock)}>
          Rock
        </Link>
        <Link href={"/result"} onClick={() => setUserChoice(Choices.paper)}>
          Paper
        </Link>
        <Link href={"/result"} onClick={() => setUserChoice(Choices.scissors)}>
          Scissors
        </Link>
        <Link href={"/result"} onClick={() => setUserChoice(Choices.lizard)}>
          Lizard
        </Link>
        <Link href={"/result"} onClick={() => setUserChoice(Choices.spock)}>
          Spock
        </Link>
      </div>
    </main>
  );
}
