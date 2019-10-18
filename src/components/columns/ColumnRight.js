import React from 'react'
import LogoPicker from '../LogoPicker';
import TextPicker from '../TextPicker';

const ColumnRight = () => {
  return (
    <div className="ColumnRight">
      <h2 className="ColumnRight__heading heading-small">Add logo</h2>
      <LogoPicker />
      <TextPicker />
    </div>
  )
}

export default ColumnRight;
