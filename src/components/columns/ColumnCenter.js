import React from 'react';
import DropZone from '../DropZone';

const ColumnCenter = ({ backgroundImageSrc }) => {

  return (
    <div className="ColumnCenter">
      <h1 className="ColumnCenter-heading heading--medium">Simple Editor</h1>
      <DropZone backgroundImageSrc={backgroundImageSrc} />
      <button className="btn">Download as image</button>
    </div>
  )
}

export default ColumnCenter;
