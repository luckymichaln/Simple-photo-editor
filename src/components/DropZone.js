import React from 'react';
import classNames from 'classnames';

const DropZone = ({ backgroundImageSrc, nodes, moveNode, deleteNode, getNodeDimentions, dropZoneActive }) => {

  const dropZoneClasses = classNames({
    'DropZone': true,
    'DropZone--empty': !backgroundImageSrc,
    'DropZone--active': dropZoneActive
  });

  const handleMouseDown = (key, nodeRef) => {
    getNodeDimentions(nodeRef.current)
    moveNode(nodeRef.current, key)
  }

  const DropZoneNode = nodes ? nodes.map((node, key) => {
    let nodeRef = React.createRef();

    return (
      node.type === 'text' ?
        <li
          key={key}
          ref={nodeRef}
          className="Node Node--text"
          onMouseDown={() => handleMouseDown(key, nodeRef)}
          style={{ fontFamily: `${node.fontFamily}`, top: `${node.position.y} || '50%'`, left: `${node.position.x} || '50%'` }}
        >
          {node.value}
          <button
            className="btn btn--delete"
            onClick={() => deleteNode(key)}
          >
            Delete
          </button>
        </li>
        :
        <li
          key={key}
          ref={nodeRef}
          className="Node Node--image"
          onMouseDown={() => handleMouseDown(key, nodeRef)}
        >
          <img
            draggable="false"
            src={node.value}
            alt="logotype"
          />
          <button
            className="btn btn--delete"
            onClick={() => deleteNode(key)}
          >
            Delete
          </button>
        </li>
    );
  }) : null;

  return (
    <div className={dropZoneClasses} id="DropZoneField">
      {backgroundImageSrc &&
        <div className="DropZone__background-image" style={{ backgroundImage: `url(${backgroundImageSrc})` }} />
      }
      {nodes &&
        <ul className="Nodes">
          {DropZoneNode}
        </ul>
      }
    </div>
  )
}

export default DropZone;
