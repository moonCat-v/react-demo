import React, { useMemo } from 'react';

export default function multiview(props) {
  const { children, grid, layout } = props;

  const handleStyleData = (divisor, dividend) =>
    (divisor / dividend) * 100 + '%';

  // 计算当前视图位置和大小
  const style = useMemo(() => {
    const { column, row } = layout;
    const { height, left, top, width } = grid;

    return {
      top: handleStyleData(top, row),
      left: handleStyleData(left, column),
      width: handleStyleData(width, column),
      height: handleStyleData(height, row),
    };
  }, [grid, layout]);

  return (
    <div className="multiview-wrap" style={{ ...style }}>
      {/* 渲染索要展示的内容 */}
      {children}
    </div>
  );
}
