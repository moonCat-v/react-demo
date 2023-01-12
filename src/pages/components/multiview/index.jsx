import React, { useMemo, useState } from 'react';
// 引入定义的视图数据
import { viewerLayout } from '../../../contants/index';
// 引入抽出的视图组件
import Multiview from './multiview';
import './multiview.less';

export default function multiview() {
  const [currentLay, setCurrentLay] = useState('theme1');

  const handleClcik = (key) => {
    setCurrentLay(key);
  };

  // 获取当前视图的布局数据
  const { layout, grids = [] } = useMemo(() => {
    return viewerLayout[currentLay];
  }, [currentLay]);

  return (
    <div className="view-wrap">
      <div className="view-button-wrap">
        {Object.entries(viewerLayout).map(([key, value]) => (
          <button
            style={{ marginLeft: '10px' }}
            onClick={() => handleClcik(key)}
            key={key}
          >
            {value.label}
          </button>
        ))}
      </div>

      {/* 根据数据渲染所有视图 */}
      <div className="view-content-wrap">
        {grids.map((gridItem, index) => {
          return (
            <Multiview key={index} grid={gridItem} layout={layout}>
              {index}
            </Multiview>
          );
        })}
      </div>
    </div>
  );
}
