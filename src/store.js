import { createPinia } from 'pinia'
const pinia = createPinia()
export default pinia

import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
    name: 'John Doe',
    items: ['Item 1', 'Item 2', 'Item 3']
  }),
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  }
})