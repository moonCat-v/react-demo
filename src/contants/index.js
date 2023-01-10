const viewerLayout = {
  // 单视图
  theme1: {
    label: '单视图',
    layout: { row: 1, column: 1 },
    grids: [
      { left: 0, top: 0, width: 1, height: 1 },
    ],
  },
  // 左右双视图
  theme2: {
    label: '左右',
    layout: { row: 1, column: 2 },
    grids: [
      { left: 0, top: 0, width: 1, height: 1 },
      { left: 1, top: 0, width: 1, height: 1 },
    ],
  },
  // 上下双视图
  theme3: {
    label: '上下',
    layout: { row: 2, column: 1 },
    grids: [
      { left: 0, top: 0, width: 1, height: 1 },
      { left: 0, top: 1, width: 1, height: 1 },
    ],
  },
  // 左一右二三视图
  theme4: {
    label: '左一右二',
    layout: { row: 2, column: 2 },
    grids: [
      { left: 0, top: 0, width: 1, height: 2 },
      { left: 1, top: 0, width: 1, height: 1 },
      { left: 1, top: 1, width: 1, height: 1 },
    ],
  },
  // 左二右一三视图
  theme5: {
    label: '左二右一',
    layout: { row: 2, column: 2 },
    grids: [
      { left: 0, top: 0, width: 1, height: 1 },
      { left: 0, top: 1, width: 1, height: 1 },
      { left: 1, top: 0, width: 1, height: 2 },
    ],
  },
  // 上一下二三视图
  theme6: {
    label: '上一下二',
    layout: { row: 2, column: 2 },
    grids: [
      { left: 0, top: 0, width: 2, height: 1 },
      { left: 0, top: 1, width: 1, height: 1 },
      { left: 1, top: 1, width: 1, height: 1 },
    ],
  },
  // 上二下一三视图
  theme7: {
    label: '上二下一',
    layout: { row: 2, column: 2 },
    grids: [
      { left: 0, top: 0, width: 1, height: 1 },
      { left: 1, top: 0, width: 1, height: 1 },
      { left: 0, top: 1, width: 2, height: 1 },
    ],
  },
  // 田字四视图
  theme8: {
    label: '上二下二',
    layout: { row: 2, column: 2 },
    grids: [
      { left: 0, top: 0, width: 1, height: 1 },
      { left: 1, top: 0, width: 1, height: 1 },
      { left: 0, top: 1, width: 1, height: 1 },
      { left: 1, top: 1, width: 1, height: 1 },
    ],
  },

  // 左一右三
  theme9: {
    label: '左一右三',
    layout: { row: 3, column: 2 },
    grids: [
      { left: 0, top: 0, width: 1, height: 3 },
      { left: 1, top: 0, width: 1, height: 1 },
      { left: 1, top: 1, width: 1, height: 1 },
      { left: 1, top: 2, width: 1, height: 1 },
    ],
  },

  // 左三右一
  theme10: {
    label: '左三右一',
    layout: { row: 3, column: 2 },
    grids: [
      { left: 0, top: 0, width: 1, height: 1 },
      { left: 0, top: 1, width: 1, height: 1 },
      { left: 0, top: 2, width: 1, height: 1 },
      { left: 1, top: 0, width: 1, height: 3 },
    ],
  },
  theme11: {
    label: '上二下三',
    layout: { row: 2, column: 3 },
    grids: [
      { left: 0, top: 0, width: 1.5, height: 1 },
      { left: 1.5, top: 0, width: 1.5, height: 1 },
      { left: 0, top: 1, width: 1, height: 1 },
      { left: 1, top: 1, width: 1, height: 1 },
      { left: 2, top: 1, width: 1, height: 1 },
    ],
  },
  theme12: {
    label: '左三中一右三',
    layout: { row: 3, column: 3 },
    grids: [
      { left: 0, top: 0, width: 1, height: 1 },
      { left: 0, top: 1, width: 1, height: 1 },
      { left: 0, top: 2, width: 1, height: 1 },
      { left: 1, top: 0, width: 1, height: 3 },
      { left: 2, top: 0, width: 1, height: 1 },
      { left: 2, top: 1, width: 1, height: 1 },
      { left: 2, top: 2, width: 1, height: 1 },
    ],
  },

  // 待扩展。。。
};
export {
  viewerLayout
}