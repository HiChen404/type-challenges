{
  type User = { name: string; age: number; get(): void }

  type FilterObjectProperty<T, U> = {
    [K in keyof T as K extends U ? K : never]: T[K]
  }

  type UserFilter = FilterObjectProperty<User, 'name'>
}
