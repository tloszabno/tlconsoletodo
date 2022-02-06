export type ActionsType =
  | "EXIT"
  | "ADD_TASK"
  | "ADD_LIST"
  | "MARK_TASK_DONE"
  | "MARK_TASK_UNDONE"
  | "REMOVE_TASK"
  | "REMOVE_ALL_DONE_TASKS"
  | "SWITCH_TO_LIST"
  | "LIST_TASKS"
  | "LIST_LISTS"
  | "REMOVE_LIST"
  | "INVALID"


export type ActionResult = {

}

export interface Action {
  type: ActionsType,
  run: () => ActionResult
}


export const exitAction = () : Action => ({
  type: 'EXIT',
  run: () => ({})
})

export const addTaskAction = (task: string) : Action => ({
  type: 'ADD_TASK',
  run: () => {
    console.log(`adding task "${task}"`)
    return {}
  }
})

export const invalidAction = () : Action => ({
  type: 'INVALID',
  run: () => ({})
})
