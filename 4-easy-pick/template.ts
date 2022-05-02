type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

//js 实现
function MyPick(todo, keys) {
  const obj = {}
  keys.forEach(key => {
    if (key in todo) {
      obj[key] = todo[key]
    }
  })
  return obj
}

//1. 返回一个对象
//2. 遍历 foreach
//3. todo[key]取值
//4. 判断key在不在todo中
