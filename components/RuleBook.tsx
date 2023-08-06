import Image from "next/image";
import CloseIcon from "./CloseIcon";
import { motion as m } from "framer-motion";

export default function RuleBook({
  setActive,
}: {
  setActive: (active: boolean) => void;
}) {
  return (
    <m.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none z-[100]"
    >
      <div className="bg-white md:max-w-[400px] md:max-h-[461px] w-full h-full pointer-events-auto rounded-[8px] flex flex-col justify-between md:justify-start items-center pb-[66px] pt-[95px] md:p-[32px] md:pb-[47px] md:gap-[20px]">
        <m.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-between md:w-full"
        >
          <h2 className="text-gray font-bold text-[32px] leading-[32px] uppercase">
            Rules
          </h2>
          <CloseIcon setActive={setActive} />
        </m.div>
        <m.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Image
            src={"/image-rules-bonus.svg"}
            width={336}
            height={330}
            alt="rules"
            className="w-[311px] h-[305px] md:w-[336] md:h-[330]"
          />
        </m.div>
        <CloseIcon setActive={setActive} isMobile={true} />
      </div>
    </m.div>
  );
}
