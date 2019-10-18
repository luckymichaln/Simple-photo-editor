import React from 'react';
import classNames from 'classnames';

const DropZone = ({ backgroundImageSrc }) => {

  const dropZoneClasses = classNames({
    'ColumnCenter__dropzone': true,
    'ColumnCenter__dropzone--empty': !backgroundImageSrc,
  });

  return (
    <div className={dropZoneClasses}>
      {backgroundImageSrc && <div className="DropZone__background-image">
        <img src={backgroundImageSrc} srcSet={`${backgroundImageSrc} 1x, ${backgroundImageSrc} 2x`} alt="Simple Editor background" />
      </div>}
    </div>
  )
}

export default DropZone;
