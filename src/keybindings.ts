import { ActionsType } from "./actions";

export const keybindings : Record<string, ActionsType> = {
  'x' : 'EXIT',
  'a' : 'ADD_TASK',
  'al' : 'ADD_LIST',
  'd' : 'MARK_TASK_DONE',
  'u' : 'MARK_TASK_UNDONE',
  'r' : 'REMOVE_TASK',
  'c' : 'REMOVE_ALL_DONE_TASKS',
  's' : 'SWITCH_TO_LIST',
  'l' : 'LIST_TASKS',
  'll': 'LIST_LISTS',
  'rl': 'REMOVE_LIST'
}
