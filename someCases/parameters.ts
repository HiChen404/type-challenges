namespace Parameters {
  type T1 = Parameters<(s: string, d: string) => void>
  type T2 = Parameters<<T>(arg: T) => T>
  // type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never
  type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never
}
