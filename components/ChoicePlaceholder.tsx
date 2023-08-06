import { motion as m } from "framer-motion";

export default function ChoicePlaceholder({ isActive }: { isActive?: boolean }) {
  return (
    <m.div
      initial={{ scale: 0 }}
      animate={{ scale: isActive ? 0 : 1 }}
      transition={{ delay: 0.4 }}
      className="w-[130px] h-[127.1px] md:w-[292.61px] md:h-[286.7px] flex items-center justify-center"
    >
      <div className="bg-black/10 w-[110px] aspect-square md:w-[224.63px] rounded-full" />
    </m.div>
  );
}
