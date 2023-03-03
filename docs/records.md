### Effective TypeScript

1. ts是js的超集。也就是说，所有js程序已经是ts程序。ts添加了类型系统，对js运行时进行建模，并尝试发现在运行时引发异常的代码。
2. 代码生成独立于类型系统，ts类型不影响代码运行时的行为或性能。ts在编码时使用，编译运行后生成浏览器识别的js代码，并移除了所有的类型检查。
3. 尽量避免使用any类型，它能有效静默类型检查器和ts语言服务。
4. type和interface异同。复杂类型用type,考虑扩增用interface

- 使用type场景
  - 定义基本类型
  - 定义元组类型
  - 定义函数类型
  - 定义联合类型
  - 定义映射类型

- 使用interface接口
  - 利用接口自动合并特征
  - 定义对象类型且无需使用type

5. 同名接口会自动合并，类型别名不会
6. 泛型相当于类型的函数。使用泛型在类型之间进行映射，而不是重复类型。使用extends来约束泛型。

类型映射工具：
keyof：返回对象身上key值组成的联合类型
typeof：接受值返回其typescript类型
索引:`如[property: string]: string`，`[键名: 键类型]: 键值`，`键类型`一般为string,number或symbol
映射类型

当对象的属性在运行前无法获知时，请使用索引签名。




### 代码片段集合

```typescript
// 消除类型重复
interface State {
  userId: string
  pageTitle: string
  recentFiles: string[]
  pageContents: string
}

interface TopNavState {
  userId: string
  pageTitle: string
  recentFiles: string[]
}

// 将 topNavState 定义为 State 中字段的子集

type TopNavState = {
  userId: State['userId']
  pageTitle: State['pageTitle']
  recentFiles: State['recentFiles']
}

// 映射类型

type TopNavState = {
  [k in 'userId' | 'pageTitle' | 'recentFiles']: State[k]
}

// 工具类型
type Pick<T, K> = {[k in K]: T[k] }

type TopNavState = Pick<State, 'userId' | 'pageTitle' | 'recentFiles'>
```