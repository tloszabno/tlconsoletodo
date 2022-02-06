import {
  Action,
  addTaskAction,
  exitAction as exitAction,
  invalidAction as invalidAction,
} from "./actions";
import { keybindings } from "./keybindings";

export const parseAction = (input: string): Action => {
  const [action, ...rest] = input.split(" ");
  const text = rest.join(" ");

  if (!action) {
    return invalidAction();
  }

  switch (keybindings[action]) {
    case "EXIT":
      return exitAction();
    case "ADD_TASK":
      return addTaskAction(text)
  }

  return invalidAction();
};
