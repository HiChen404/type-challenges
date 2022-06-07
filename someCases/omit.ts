namespace omit {
  interface Todo {
    title: string
    description: string
    completed: boolean
    createdAt: number
  }
  //过滤掉 Todo 中的 description 属性
  type TodoPreview = Omit<Todo, 'description'>

  //Tips:
  // 如果你想要过滤掉 Todo 中的 description 属性，你可以使用 Omit 来实现。
  // 如果你想要提取 Todo 中的 description 属性，可以使用 Pick
  // Pick 是 提取 interface 或 type 中的某个属性，而 Omit 是排除掉某个属性。
  // Extract 是 提取 Union 中的某个值，而 Exclude 是排除掉某个值。

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
