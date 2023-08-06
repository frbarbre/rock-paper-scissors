import { Choices } from "@/types";

export function userIndexFinder(userChoice: string) {
    if (userChoice === Choices.scissors) return 0;
    if (userChoice === Choices.paper) return 1;
    if (userChoice === Choices.rock) return 2;
    if (userChoice === Choices.lizard) return 3;
    if (userChoice === Choices.spock) return 4;
    return null
  }
