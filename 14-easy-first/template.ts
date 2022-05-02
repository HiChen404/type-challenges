// type First<T extends any[]> = T[0]

//如果是一个空数组 []，那么返回 undefined

// type First<T extends any[]> = T extends [] ? never : T[0]

// 判断是不是空数组

type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

//通过 length 判断数组长度是否为 0

// type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never

// 1. extends 类型条件判断
