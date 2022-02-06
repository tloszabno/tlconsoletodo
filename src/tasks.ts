import { List } from "immutable";

export class Task {
  name: string;
  done: boolean = false;

  constructor(name: string) {
    this.name = name;
  }
}

export class TodoList {
  name: string;
  tasks: List<Task> = List();

  constructor(name: string) {
    this.name = name;
  }

  add(task: string){
    this.tasks.push(new Task(task));
    return `Added task ${task} to list ${this.name}`
  }
}

class TodoListManager {
  _current: TodoList = new TodoList("Default");
}

const manager = new TodoListManager();

export const currentList = (): TodoList => manager._current;
