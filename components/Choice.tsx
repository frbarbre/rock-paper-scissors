import { useStore } from "@/app/store";
import { Choices } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { shallow } from "zustand/shallow";
import { motion as m } from "framer-motion";
import Shadow from "./Shadow";

type Props = {
  choice: {
    title: string;
    choice: Choices;
    image: string;
  };
  index?: number;
  user?: boolean;
  isActive?: boolean;
};

export default function Choice({ choice, index, user, isActive }: Props) {
  const [userChoice, setUserChoice] = useStore(
    (store) => [store.userChoice, store.setUserChoice],
    shallow
  );
  const pathName = usePathname();

  function handleUserChoice() {
    setUserChoice(choice.choice);
    sessionStorage.setItem("userChoice", choice.choice);
  }

  const delay = 0.3;

  return (
    <Link
      href={pathName === "/" ? "/result" : ""}
      onClick={handleUserChoice}
      className={`${
        pathName === "/result"
          ? "w-[130px] h-[127.1px] md:w-[292.61px] md:h-[286.7px] relative cursor-default"
          : "w-[96px] h-[92.7px] md:w-[145px] md:h-[141.44px] absolute"
      } rounded-full block group ${
        choice.choice === Choices.rock
          ? `${
              pathName === "/result"
                ? ""
                : "bottom-0 right-[20%] translate-x-[50%] translate-y-[50%]"
            }`
          : choice.choice === Choices.paper
          ? `${
              pathName === "/result"
                ? ""
                : "top-[40%] right-0 translate-x-[50%] translate-y-[-50%]"
            }`
          : choice.choice === Choices.scissors
          ? `${
              pathName === "/result"
                ? ""
                : "top-0 left-[50%] translate-x-[-50%] translate-y-[-50%]"
            }`
          : choice.choice === Choices.lizard
          ? `${
              pathName === "/result"
                ? ""
                : "bottom-0 left-[20%] translate-x-[-50%] translate-y-[50%]"
            }`
          : choice.choice === Choices.spock
          ? `${
              pathName === "/result"
                ? ""
                : "top-[40%] right-l translate-x-[-50%] translate-y-[-50%]"
            }`
          : ""
      }`}
    >
      <m.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: index ? 0.15 * index + delay : delay }}
        className={`w-full h-full relative flex items-center justify-center bg-gradient-to-t rounded-full z-10 ${
          choice.choice === Choices.rock
            ? `from-rock-start to-rock-end`
            : choice.choice === Choices.paper
            ? `from-paper-start to-paper-end`
            : choice.choice === Choices.scissors
            ? `from-scissors-start to-scissors-end`
            : choice.choice === Choices.lizard
            ? `from-lizard-start to-lizard-end`
            : choice.choice === Choices.spock
            ? "from-spock-start to-spock-end"
            : ""
        }`}
      >
        <div
          className={`bg-[#BABFD4] rounded-full flex items-end justify-center ${
            pathName === "/result"
              ? "w-[100px] h-[100px] md:w-[224.63px] md:h-[224.63px]"
              : "w-[73.7px] h-[73.7px] md:w-[111.31px] md:h-[111.31px]"
          }`}
        >
          <div
            className={`bg-gradient-to-t from-[#F3F3F3] to-[#DADADA] w-full rounded-full ${
              pathName === "/result"
                ? "h-[94.34px] md:h-[212.81px]"
                : "h-[68.81px] md:h-[104.99px]"
            }`}
          >
            <Image
              src={choice.image}
              width={40}
              height={40}
              alt={choice.title}
              className={`${
                pathName === "/result"
                  ? "w-[40px] md:w-[89px]"
                  : "w-[30px] md:w-[44px]"
              } absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]`}
            />
          </div>
        </div>
      </m.div>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index ? 0.15 * index + delay : delay }}
        className={`absolute inset-0 rounded-full ${
          choice.choice === Choices.rock
            ? "bg-rock-shadow"
            : choice.choice === Choices.paper
            ? "bg-paper-shadow"
            : choice.choice === Choices.scissors
            ? "bg-scissors-shadow"
            : choice.choice === Choices.lizard
            ? "bg-lizard-shadow"
            : choice.choice === Choices.spock
            ? "bg-spock-shadow"
            : ""
        } ${
          pathName === "/result"
            ? "translate-y-[5.9px] md:translate-y-[13.3px]"
            : "translate-y-[4.3px] md:translate-y-[6.86px]"
        }`}
      />
      {pathName === "/" ? (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index ? 0.15 * index + delay : delay }}
          className={`absolute inset-0 bg-white/5 rounded-full translate-y-[3%] scale-0 transition-all group-hover:scale-125`}
        />
      ) : user ? (
        <Shadow isActive={isActive} />
      ) : (
        ""
      )}
    </Link>
  );
}
