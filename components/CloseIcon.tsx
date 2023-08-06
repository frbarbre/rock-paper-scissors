import Image from "next/image";
import { motion as m } from "framer-motion";

export default function CloseIcon({
  setActive,
  isMobile,
}: {
  setActive: (active: boolean) => void;
  isMobile?: boolean;
}) {
  return (
    <m.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: isMobile ? 0.5 : 0.3 }}
      className={`${isMobile ? "md:hidden" : "hidden md:block"} cursor-pointer`}
      onClick={() => setActive(false)}
    >
      <Image
        src={"/icon-close.svg"}
        width={19.09}
        height={19.09}
        alt="close-icon"
      />
    </m.div>
  );
}
