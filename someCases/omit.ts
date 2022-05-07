namespace omit {
  interface Todo {
    title: string
    description: string
    completed: boolean
    createdAt: number
  }
  //过滤掉 Todo 中的 description 属性
  type TodoPreview = Omit<Todo, 'description'>

  //Constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals).
  // 通过从 Type 中选取所有属性，然后移除 Keys (字符串文字或字符串文字的并集)来构造类型。

  //实现 Omit,
  // Omit 的实现使用了 Exclude
  type MyOmit<T, U> = {
    [P in Exclude<keyof T, U>]: T[P]
  }

  //不使用 Exclude
  type MyOmitOrigin<T, U> = {
    [P in keyof T as P extends U ? never : P]: T[P]
  }
  type TodoPre = MyOmitOrigin<Todo, 'description'>
}
