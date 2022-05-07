import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
]

// @ts-expect-error
type error = MyOmit<Todo, 'description' | 'invalid'>

type MyOmit<T, U extends keyof T> = {
  [P in Exclude<keyof T, U>]: T[P]
}

// type MyOmit<T, U extends keyof T> = {
//   [P in keyof T as P extends U ? never : P]: T[P]
// }

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}
