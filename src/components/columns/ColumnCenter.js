import React from 'react';
import DropZone from '../DropZone';

const ColumnCenter = ({ backgroundImageSrc, nodes, moveNode, deleteNode, getNodeDimentions, dropZoneActive, showDeleteBtn }) => {

  return (
    <div className="ColumnCenter">
      <h1 className="ColumnCenter-heading heading--medium">Simple Editor</h1>
      <DropZone
        nodes={nodes}
        moveNode={moveNode}
        deleteNode={deleteNode}
        showDeleteBtn={showDeleteBtn}
        getNodeDimentions={getNodeDimentions}
        dropZoneActive={dropZoneActive}
        backgroundImageSrc={backgroundImageSrc}
      />
      <button className="btn">Download as image</button>
    </div>
  )
}

export default ColumnCenter;
