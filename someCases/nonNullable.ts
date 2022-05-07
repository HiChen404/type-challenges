namespace nonNullable {
  type T0 = NonNullable<string | number | undefined>
  type T1 = NonNullable<string[] | null | undefined>

  // Constructs a type by excluding null and undefined from Type.

  // 通过从 Type 中排除 null 和 undefined 来构造类型。

  // 实现 NonNullable

  type nonNullable<T> = T extends null | undefined ? never : T
}
