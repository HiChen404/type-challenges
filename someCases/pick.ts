interface Todo {
  title: string
  description: string
  completed: boolean
  date: string
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
}

// Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.
// 通过从 Type 中选择一组属性 Keys (字符串文本或字符串文本的并集)来构造类型。

// 实现 Pick

type My_Pick<T, K extends keyof T> = {
  [P in K]: T[P]
}
