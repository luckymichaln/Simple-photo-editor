import React from 'react';
import classNames from 'classnames';

const DropZone = ({ backgroundImageSrc, nodes, moveNode, deleteNode, getNodeDimentions, dropZoneActive }) => {

  const dropZoneClasses = classNames({
    'DropZone': true,
    'DropZone--empty': !backgroundImageSrc,
    'DropZone--active': dropZoneActive
  });

  const handleMouseDown = (nodeRef) => {
    getNodeDimentions(nodeRef.current)
    moveNode(nodeRef.current)
  }

  const DropZoneNode = nodes ? nodes.map((node, key) => {
    let nodeRef = React.createRef();

    console.log(node)

    const styleLogic = (() => {
      switch (node.fontStyle) {
        case 'bold':
          return 'FontWeight'
        case 'italic':
          return 'FontStyle'
        case 'underline':
          return 'TextDecoration'
        default:
          break;
      }
    })();

    // const style = styleLogic()

    console.log(styleLogic)

    return (
      node.type === 'text' ?
        <li
          key={key}
          ref={nodeRef}
          className="Node Node--text"
          onMouseDown={() => handleMouseDown(nodeRef)}
          style={{
            fontFamily: `${node.fontFamily}`,
            fontWeight: `${node.fontStyle}`,
            fontStyle: `${node.fontStyle}`,
            textDecoration: `${node.fontStyle}`,
          }}
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
          onMouseDown={() => handleMouseDown(nodeRef)}
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
