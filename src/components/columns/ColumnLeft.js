import React from 'react';
import classNames from 'classnames';
import importAll from '../../helpers/import-all';
const list = importAll(require.context('../../assets/images/backgrounds', false, /\.(jpe?g)$/));

const ColumnLeft = ({ onClick, backgroundImage }) => {

  const btnClass = classNames({
    'btn': true,
    'btn--delete': backgroundImage
  })

  const ImagesList = list.map((src, key) => {
    return (
      <div
        key={key}
        className="background-thumb"
        onClick={ev => onClick(list[key])}
      >
        <img
          src={src}
          srcSet={`${src} 1x, ${src} 2x`}
          alt="Background thumbnail"
          draggable="false"
        />
      </div>
    );
  });

  return (
    <div className="ColumnLeft">
      <h2 className="ColumnLeft-heading heading-small">Select Background</h2>
      <div className="ColumnLeft__backgrounds">{ImagesList}</div>
      <button className={btnClass} onClick={() => onClick()}>Delete background</button>
    </div>
  );
}

export default ColumnLeft;
