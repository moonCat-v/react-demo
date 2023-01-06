const viewerLayout = {
  // 单视图
  theme1: {
    layout: { row: 1, column: 1 },
    grids: [
      { left: 0, top: 0, width: 1, height: 1 },
    ],
  },
  // 左右双视图
  theme2: {
    layout: { row: 1, column: 2 },
    grids: [
      { left: 0, top: 0, width: 1, height: 1 },
      { left: 1, top: 0, width: 1, height: 1 },
    ],
  },
  // 上下双视图
  theme3: {
    layout: { row: 2, column: 1 },
    grids: [
      { left: 0, top: 0, width: 1, height: 1 },
      { left: 0, top: 1, width: 1, height: 1 },
    ],
  },
  // 左一右二三视图
  theme4: {
    layout: { row: 2, column: 2 },
    grids: [
      { left: 0, top: 0, width: 2, height: 1 },
      { left: 0, top: 1, width: 1, height: 1 },
      { left: 1, top: 1, width: 1, height: 1 },
    ],
  },
  // 左二右一三视图
  theme5: {
    layout: { row: 2, column: 2 },
    grids: [
      { left: 0, top: 0, width: 1, height: 1 },
      { left: 0, top: 1, width: 1, height: 1 },
      { left: 1, top: 0, width: 1, height: 2 },
    ],
  },
  // 上一下二三视图
  theme6: {
    layout: { row: 2, column: 2 },
    grids: [
      { left: 0, top: 0, width: 2, height: 1 },
      { left: 0, top: 1, width: 1, height: 1 },
      { left: 1, top: 1, width: 1, height: 1 },
    ],
  },
  // 上二下一三视图
  theme7: {
    layout: { row: 2, column: 2 },
    grids: [
      { left: 0, top: 0, width: 1, height: 1 },
      { left: 1, top: 0, width: 1, height: 1 },
      { left: 0, top: 1, width: 2, height: 1 },
    ],
  },
  // 田字四视图
  theme8: {
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
    layout: { row: 3, column: 2 },
    grids: [
      { left: 0, top: 0, width: 1, height: 1 },
      { left: 0, top: 1, width: 1, height: 1 },
      { left: 0, top: 2, width: 1, height: 1 },
      { left: 1, top: 0, width: 1, height: 3 },
    ],
  },

  // 待扩展。。。
};



export {
  viewerLayout
}