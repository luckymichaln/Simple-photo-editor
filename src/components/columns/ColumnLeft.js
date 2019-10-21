import React from 'react';
import classNames from 'classnames';
import { ReactComponent as Loader } from '../../assets/images/loader.svg';

const ColumnLeft = ({ setBackgroundImage, backgroundImage, backgroundsRandomArray, shuffleBackgrounds }) => {
  const btnClass = classNames({
    'btn': true,
    'btn--delete': backgroundImage
  })

  const ImagesList = backgroundsRandomArray ? backgroundsRandomArray.map((src, key) => {
    return (
      <div
        key={key}
        className="background-thumb"
        onClick={ev => setBackgroundImage(backgroundsRandomArray[key])}
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
        {!ImagesList && <div className="backgrounds-loader"><span>loading images...</span><Loader /></div>}
        {ImagesList}
      </div>
      <div className="ColumnLeft__actions">
        <button
          className="btn"
          disabled={!backgroundsRandomArray}
          onClick={() => shuffleBackgrounds()}
        >
          Change images
        </button>
        <button
          className={btnClass}
          disabled={!backgroundImage}
          onClick={() => setBackgroundImage()}
        >
          Delete background
        </button>
      </div>
    </div>
  );
}

export default ColumnLeft;
