import React from 'react';

import DragEvent from './components/dragEvent';
import Multiview from './components/multiview/index';

const nodeMap = {
  DragEvent,
  Multiview,
};

export default function Index() {
  const queryPrames = window.location.href.split('?')[1];

  const Component = nodeMap[queryPrames] || DragEvent;

  return (
    <div>
      <Component />
    </div>
  );
}
