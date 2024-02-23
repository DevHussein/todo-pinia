import { defineStore } from 'pinia'

interface ToDo {
  id: number
  item: string
  completed: boolean
}

interface State {
  todoList: ToDo[],
  id: number

}

export const useTodoListStore = defineStore('todoList', {
  state: (): State => ({ todoList: [], id: 0 }),
  actions: {
    addTodo(item: string) {
      this.todoList.push({ item, id: this.id++, completed: false })
    },
    deleteTodo(itemID: number) {
      this.todoList = this.todoList.filter((object) => {
        return object.id !== itemID
      })
    },
    toggleCompleted(idToFind: number) {
      const todo = this.todoList.find((obj) =>
        obj.id === idToFind)
      if (todo) {
        todo.completed = !todo.completed
      }
    }
  }
})