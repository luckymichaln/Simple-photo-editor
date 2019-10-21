import React from 'react';
import DropZone from '../DropZone';
import domtoimage from 'dom-to-image';

const ColumnCenter = ({ backgroundImageSrc, nodes, moveNode, deleteNode, getNodeDimentions, dropZoneNode, dropZoneActive }) => {

  const handleSaveImage = () => {
    domtoimage.toJpeg(dropZoneNode, { quality: 1 })
      .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-advert.jpeg';
        link.href = dataUrl;
        link.click();
      });
  }

  return (
    <div className="ColumnCenter">
      <h1 className="ColumnCenter-heading heading--medium">Simple Editor</h1>
      <DropZone
        nodes={nodes}
        moveNode={moveNode}
        deleteNode={deleteNode}
        getNodeDimentions={getNodeDimentions}
        dropZoneActive={dropZoneActive}
        backgroundImageSrc={backgroundImageSrc}
      />
      <button className="btn" onClick={() => handleSaveImage()} disabled={!backgroundImageSrc && !nodes.length}> Download as image</button>
    </div>
  )
}

export default ColumnCenter;
