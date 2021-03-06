import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
]

// type Pop<T> =Omit<[..]>
type Pop<T extends any[]> = T extends [...infer V] ? 1 : 1
let t1: Pop<[1, 2, 3]>
