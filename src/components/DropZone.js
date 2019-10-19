import React from 'react';
import classNames from 'classnames';

const DropZone = ({ backgroundImageSrc, nodes }) => {
  console.log(nodes, 'nodes')

  const dropZoneClasses = classNames({
    'DropZone': true,
    'DropZone--empty': !backgroundImageSrc,
  });

  const DropZoneNode = nodes ? nodes.map((node, key) => {
    return (
      <li className="Node" key={key}>{node}</li>
    );
  }) : null;

  return (
    <div className={dropZoneClasses}>
      {backgroundImageSrc && <div className="DropZone__background-image">
        <img src={backgroundImageSrc} srcSet={`${backgroundImageSrc} 1x, ${backgroundImageSrc} 2x`} alt="Simple Editor background" />
      </div>}
      {nodes && <ul className="Nodes">
        {DropZoneNode}
      </ul>}
    </div>
  )
}

export default DropZone;
