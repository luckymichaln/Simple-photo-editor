import React from 'react'
import LogoPicker from '../LogoPicker';
import TextPicker from '../TextPicker';

const ColumnRight = () => {
  return (
    <div className="ColumnRight">
      <LogoPicker />
      <TextPicker />
      <div className="ColumnRight__actions">
        <button className="btn btn--small">Save</button>
        <button className="btn btn--small">Load</button>
      </div>
    </div>
  )
}

export default ColumnRight;
