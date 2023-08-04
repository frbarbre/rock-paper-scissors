export enum Choices {
  rock = "rock",
  paper = "paper",
  scissors = "scissors",
  lizard = "lizard",
  spock = "spock"
}

export enum Result {
  win = "win",
  loss = "loss",
  draw = "draw",
}

export type Choice = "" | Choices;

export type Store = {
  houseDecider: null | number;
  setHouseDecider: (houseDecider: null | number) => void;
  houseChoice: Choice;
  setHouseChoice: (houseChoice: Choice) => void;
  userChoice: Choice;
  setUserChoice: (userChoice: Choice) => void;
  result: Result | "";
  setResult: (result: Result | "") => void;
  score: number;
  setScore: (score: number) => void;
};
