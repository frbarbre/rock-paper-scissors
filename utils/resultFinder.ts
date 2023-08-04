import { Choices, Result } from "@/types";

export function resultFinder(
  userChoice: "" | Choices,
  houseChoice: "" | Choices,
  setState: (state: Result | "") => void
) {
  if (userChoice === Choices.rock) {
    if (houseChoice === Choices.rock) setState(Result.draw);
    if (houseChoice === Choices.paper) setState(Result.loss);
    if (houseChoice === Choices.scissors) setState(Result.win);
    if (houseChoice === Choices.lizard) setState(Result.win);
    if (houseChoice === Choices.spock) setState(Result.loss);
  }

  if (userChoice === Choices.paper) {
    if (houseChoice === Choices.rock) setState(Result.win);
    if (houseChoice === Choices.paper) setState(Result.draw);
    if (houseChoice === Choices.scissors) setState(Result.loss);
    if (houseChoice === Choices.lizard) setState(Result.loss);
    if (houseChoice === Choices.spock) setState(Result.win);
  }

  if (userChoice === Choices.scissors) {
    if (houseChoice === Choices.rock) setState(Result.loss);
    if (houseChoice === Choices.paper) setState(Result.win);
    if (houseChoice === Choices.scissors) setState(Result.draw);
    if (houseChoice === Choices.lizard) setState(Result.win);
    if (houseChoice === Choices.spock) setState(Result.loss);
  }

  if (userChoice === Choices.lizard) {
    if (houseChoice === Choices.rock) setState(Result.loss);
    if (houseChoice === Choices.paper) setState(Result.win);
    if (houseChoice === Choices.scissors) setState(Result.loss);
    if (houseChoice === Choices.lizard) setState(Result.draw);
    if (houseChoice === Choices.spock) setState(Result.win);
  }

  if (userChoice === Choices.spock) {
    if (houseChoice === Choices.rock) setState(Result.win);
    if (houseChoice === Choices.paper) setState(Result.loss);
    if (houseChoice === Choices.scissors) setState(Result.win);
    if (houseChoice === Choices.lizard) setState(Result.loss);
    if (houseChoice === Choices.spock) setState(Result.draw);
  }
}
