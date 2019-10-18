import React from 'react';
import importAll from '../../helpers/import-all';
const list = importAll(require.context('../../assets/images/backgrounds', false, /\.(jpe?g)$/));

const ColumnLeft = ({ onClick }) => {

  const ImagesList = list.map((src, key) => {
    return (
      <div key={key} className="background-thumb" onClick={ev => onClick(list[key])} >
        <img src={src} alt="Background thumbnail" />
      </div>
    );
  });

  return (
    <div className="ColumnLeft">
      <h2 className="ColumnLeft-heading heading-small">Select Background</h2>
      <div className="ColumnLeft__backgrounds">{ImagesList}</div>
      <button className="btn btn--delete" onClick={() => onClick()}>Delete background</button>
    </div>
  );
}

export default ColumnLeft;
