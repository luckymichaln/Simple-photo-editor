import React from 'react'
import LogoPicker from '../LogoPicker';
import TextPicker from '../TextPicker';

const ColumnRight = ({ addNode, getNodeDimentions, backgroundImageSrc, nodes }) => {

  return (
    <div className="ColumnRight">
      <LogoPicker addNode={addNode} getNodeDimentions={getNodeDimentions} />
      <TextPicker addNode={addNode} />
      <div className="ColumnRight__actions">
        <button className="btn btn--small" disabled={!backgroundImageSrc && !nodes.length}>Save</button>
        <button className="btn btn--small" >Load</button>
      </div>
    </div>
  )
}

export default ColumnRight;
