import React from 'react';
import classNames from 'classnames';
import { ReactComponent as Loader } from '../../assets/images/loader.svg';

const ColumnLeft = ({ onClick, backgroundImage, backgroundsRandomArray }) => {
  const btnClass = classNames({
    'btn': true,
    'btn--delete': backgroundImage
  })

  const ImagesList = backgroundsRandomArray ? backgroundsRandomArray.map((src, key) => {
    return (
      <div
        key={key}
        className="background-thumb"
        onClick={ev => onClick(backgroundsRandomArray[key])}
      >
        <img
          src={src}
          srcSet={`${src} 1x, ${src} 2x`}
          alt="Background thumbnail"
          draggable="false"
        />
      </div>
    );
  }) : null;

  return (
    <div className="ColumnLeft">
      <h2 className="ColumnLeft-heading heading-small">Select Background</h2>
      <div className="ColumnLeft__backgrounds">
        {!ImagesList && <div className="backgrounds-loader"><span>Loading images</span><Loader /></div>}
        {ImagesList}
      </div>
      <button
        className={btnClass}
        disabled={!backgroundImage}
        onClick={() => onClick()}
      >
        Delete background
      </button>
    </div>
  );
}

export default ColumnLeft;
