import React, { useMemo, useState } from 'react';
import { viewerLayout } from '../../../contants/index';
import Multiview from './multiview';
import './multiview.less';

export default function multiview() {
  const [currentLay, setCurrentLay] = useState('theme1');

  const handleClcik = (key) => {
    setCurrentLay(key);
  };

  const { layout, grids = [] } = useMemo(() => {
    return viewerLayout[currentLay];
  }, [currentLay]);

  return (
    <div className="view-wrap">
      <div className="view-button-wrap">
        {Object.keys(viewerLayout).map((item) => (
          <button
            style={{ marginLeft: '10px' }}
            onClick={() => handleClcik(item)}
            key={item}
          >
            {item}
          </button>
        ))}
      </div>

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