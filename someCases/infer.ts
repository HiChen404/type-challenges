{
  //获取 Person 的属性值类型 type valueType = string | number
  type Person = { name: string; age: number }
  //第一种方法
  type AttrType<T> = T extends { name: infer M; age: infer V } ? M | V : never
  type valueType = AttrType<Person>

  //第二种方法
  type GetType<T> = {
    [K in keyof T]: T[K]
  }[keyof T]
  type valueType2 = GetType<Person>
}
