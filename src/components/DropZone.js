import React from 'react';
import classNames from 'classnames';

const DropZone = ({ backgroundImageSrc, nodes, moveNode, deleteNode, getNodeDimentions, dropZoneActive, showDeleteBtn }) => {

  const dropZoneClasses = classNames({
    'DropZone': true,
    'DropZone--empty': !backgroundImageSrc,
    'DropZone--active': dropZoneActive
  });

  const handleMouseDown = (key, nodeRef) => {
    console.log(nodeRef.current, 'nodeRef')
    getNodeDimentions(nodeRef.current)
    moveNode(nodeRef.current)
  }

  const handleMouseUp = (ev, key) => {
    // console.log(ev, 'ev')
    // document.removeEventListener('mousemove', moveNode(key))
  }

  const handleMouseMove = ev => {
    // ev.movementX(ev)
    console.log(ev, 'evdfdfds')
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
          onMouseMove={ev => handleMouseMove(ev)}
          onMouseUp={ev => {
            handleMouseUp(ev, key)
            console.log('up')
          }}
          onClick={() => showDeleteBtn(nodeRef.current)}
          style={{ 'fontFamily': `${node.fontFamily}` }}
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
          onMouseUp={() => {
            handleMouseUp(key)
            console.log('up')
          }}
          onClick={() => showDeleteBtn(nodeRef.current)}
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
        <div className="DropZone__background-image">
          <img src={backgroundImageSrc} srcSet={`${backgroundImageSrc} 1x, ${backgroundImageSrc} 2x`} alt="Simple Editor background" />
        </div>
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
