{
  //获取函数的返回值
  type Add = (x: number, y: number) => number[]

  type GetFunctionReturnValue<T> = T extends (...args: any[]) => infer x ? x : never

  type numberArr = GetFunctionReturnValue<Add>
}
