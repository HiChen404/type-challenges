import type { Alike, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>,
]

//第一种
type MyReadonly2<T, U = keyof T> = {
  readonly [P in keyof T as P extends U ? P : never]: T[P]
} & {
  [P in keyof T as P extends U ? never : P]: T[P]
}
//第二种
// type MyReadonly2<T, U extends keyof T = keyof T> = Readonly<Pick<T, U>> & Omit<T, U>

let todo: MyReadonly2<Todo1, 'title'> = {
  title: 'title',
  description: 'description',
  completed: true,
}

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  description?: string
  completed: boolean
}

interface Expected {
  readonly title: string
  readonly description?: string
  completed: boolean
}
