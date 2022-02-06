import readline from "readline-sync";
import { parseAction } from "./parser";

const readConsoleInput = (): string => readline.question("> ");

const mainLoop = () => {
  for (;;) {
    const input = readConsoleInput();
    const action = parseAction(input)

    if(action.type === 'EXIT'){
      return
    }

    action.run()
  }
};

mainLoop();


