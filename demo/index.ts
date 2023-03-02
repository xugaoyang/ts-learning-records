// 有用的代码片段

// 消除类型重复
interface State {
  userId: string
  pageTitle: string
  recentFiles: string[]
  pageContents: string
}

// interface TopNavState {
//   userId: string
//   pageTitle: string
//   recentFiles: string[]
// }

// 将 topNavState 定义为 State 中字段的子集

type TopNavState = {
  userId: State['userId']
  pageTitle: State['pageTitle']
  recentFiles: State['recentFiles']
}