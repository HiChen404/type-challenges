interface CatInfo {
  age?: number
  color?: string
}

type CatName = 'Tom' | 'Jerry'

const cats: Record<CatName, CatInfo> = {
  Tom: { age: 2 },
  Jerry: { age: 3 },
}
// 构造属性键为 Keys、属性值为 Type 的对象类型。此实用工具可用于将类型的属性映射到另一个类型。

//实现 Record

type MyRecord<K extends string | number | symbol, T> = {
  [P in K]: T
}
