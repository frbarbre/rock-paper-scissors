import { motion as m } from "framer-motion";

export default function Shadow({ isActive }: { isActive?: boolean }) {
  return (
    <>
      <m.div
        initial={{ y: "3%", scale: 0, opacity: 0.75 }}
        animate={{ scale: 2 }}
        transition={{ delay: !isActive ? 0.3 : 1.5 }}
        className="absolute inset-0 bg-white/5 rounded-full z-[-1]"
      />
      <m.div
        initial={{ y: "3%", scale: 0, opacity: 0.75 }}
        animate={{ scale: 1.65 }}
        transition={{ delay: !isActive ? 0.2 : 1 }}
        className="bg-white/5 rounded-full inset-0 absolute"
      />
      <m.div
        initial={{ y: "3%", scale: 0, opacity: 0.75 }}
        animate={{ scale: 1.35 }}
        transition={{ delay: !isActive ? 0.1 : 0.5 }}
        className="bg-white/5 rounded-full inset-0 absolute"
      />
    </>
  );
}
