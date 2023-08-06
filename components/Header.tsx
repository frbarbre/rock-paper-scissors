"use client";

import { useStore } from "@/app/store";
import Image from "next/image";
import { useEffect } from "react";
import ScoreBoard from "./ScoreBoard";
import Link from "next/link";
import { motion as m } from "framer-motion";

export default function Header() {
  const score = useStore((state) => state.score);

  useEffect(() => {
    sessionStorage.setItem("score", score.toString());
  }, [score]);

  return (
    <m.header
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{delay: 1.2}}
      className="px-[32px] w-full"
    >
      <div className="max-w-[700px] mx-auto w-full border-header-outline items-center border-[3px] border-solid rounded-[15px] p-[24px] mt-[32px] md:mt-[48px] flex justify-between">
        <Link href={"/"}>
          <Image
            src={"/logo-bonus.svg"}
            width={111}
            height={110}
            alt="logo"
            className="w-[49px] h-[48px] md:w-[111px] md:h-[110px]"
          />
        </Link>
        <ScoreBoard score={score} />
      </div>
    </m.header>
  );
}
