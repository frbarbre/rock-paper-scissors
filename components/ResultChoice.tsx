import { choices } from "@/data";
import Choice from "./Choice";
import { Index } from "@/types";
import { motion as m } from "framer-motion";
import ChoicePlaceholder from "./ChoicePlaceholder";

type Props = {
  index: Index;
  text: string;
  isHouse?: boolean;
  isActive?: boolean;
  isUser?: boolean;
};

export default function ResultChoice({
  index,
  text,
  isHouse,
  isActive,
  isUser,
}: Props) {
  return (
    <div className="flex flex-col gap-[17px] items-center md:gap-[63px] md:flex-col-reverse">
      {(isActive && isHouse) || isHouse === undefined ? (
        <>
          {index === 0 ? (
            <Choice choice={choices[0]} user={isUser} isActive={isActive} />
          ) : index ? (
            <Choice choice={choices[index]} user={isUser} isActive={isActive} />
          ) : (
            ""
          )}
        </>
      ) : (
        <ChoicePlaceholder isActive={isActive} />
      )}

      <p className="uppercase leading-[32px] text-[15px] font-bold tracking-[1.88px] text-white md:text-[24px] md:tracking-[3px]">
        {text}
      </p>
    </div>
  );
}
