"use client";

import Link from "next/link";
import { useStore } from "../store";
import { shallow } from "zustand/shallow";
import { Result } from "@/types";
import { useEffect, useState } from "react";

export default function ResultPage() {
  const [score, setScore] = useStore(
    (store) => [store.score, store.setScore],
    shallow
  );
  const result = useStore((state) => state.result);
  const [userChoice, setUserChoice] = useStore(
    (store) => [store.userChoice, store.setUserChoice],
    shallow
  );
  const houseChoice = useStore((state) => state.houseChoice);
  const [cachedUser] = useState(userChoice);

  useEffect(() => {
    if (result === Result.win) setScore(score + 1);
    if (result === Result.loss) setScore(score - 1);
    // Making sure to set new value on each attempt to insure proper revalidation
    setUserChoice("");
  }, []);

  return (
    <div>
      <p>You Choose: {cachedUser}</p>
      <p>The House Choose: {houseChoice}</p>
      <div>{result}</div>
      <Link href={"/"}>Try Again</Link>
    </div>
  );
}
