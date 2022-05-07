namespace extract {
  type T0 = Extract<'a' | 'b' | 'c', 'a' | 'f'>
  type T1 = Extract<string | number | (() => void), Function>

  //通过从 Type 中提取可分配给 Union 的所有联合成员来构造类型。
  // 实现 Extract
  type MyExtract<T, U> = T extends U ? T : never
}
