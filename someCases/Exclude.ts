// Constructs a type by excluding from UnionType all union members that are assignable to ExcludedMembers.

// 通过从 UnionType 中排除可分配给 ExcludedMembers 的所有联合成员来构造类型。

namespace Exclude {
  type T = Exclude<'a' | 'b' | 'c', 'a'>

  //实现 Exclude
  type MyExclude<T, K> = T extends K ? never : T
}
