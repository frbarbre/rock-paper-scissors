import { Result } from "@/types";
import Link from "next/link";
import { motion as m } from "framer-motion";

export default function ResultMessage({ result, delay }: { result: Result | "", delay: number}) {
  return (
    <div className="flex flex-col gap-[16px]">
      <h2 className="text-white font-bold text-[56px] uppercase text-center">
        {result === Result.win
          ? "You Win"
          : result === Result.loss
          ? "You Lose"
          : result === Result.draw
          ? "Draw"
          : ""}
      </h2>
      <m.div initial={{scale: 0}} animate={{scale: 1}} transition={{delay: delay}}>
        <Link
          href={"/"}
          className="w-[220px] h-[48px] bg-white rounded-[8px] flex items-center justify-center uppercase text-gray font-semibold tracking-[2.5px] hover:text-[#DB2E4D]"
        >
          Play Again
        </Link>
      </m.div>
    </div>
  );
}
