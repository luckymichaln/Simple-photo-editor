import React from 'react';
import ColumnLeft from './components/columns/ColumnLeft';
import ColumnCenter from './components/columns/ColumnCenter';
import ColumnRight from './components/columns/ColumnRight';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundImage: null,
      nodes: [],
      activeZIndex: 1,
      activeNode: {
        position: {
          x: null,
          y: null
        }
      },
      draggedNode: null,
      dropZone: null,
      dropZoneActive: false,
    }

    this.setBackgroundImage = this.setBackgroundImage.bind(this);
    this.getNodeDimentions = this.getNodeDimentions.bind(this);
    this.addNode = this.addNode.bind(this);
    this.moveNode = this.moveNode.bind(this);
    this.deleteNode = this.deleteNode.bind(this);
    this.setDropZoneActive = this.setDropZoneActive.bind(this);
    this.showDeleteBtn = this.showDeleteBtn.bind(this);
  }

  setDropZoneActive(isActive) {
    this.setState({
      dropZoneActive: isActive
    })
  }

  componentDidMount() {
    document.addEventListener('drag', function (event) { }, false);

    document.addEventListener('dragstart', ev => {
      this.setState({
        draggedNode: ev.target.attributes.src.nodeValue
      })

      ev.target.style.opacity = .5;
    }, false);

    document.addEventListener('dragend', ev => {
      ev.target.style.opacity = '';
    }, false);

    document.addEventListener('dragover', ev => {
      ev.preventDefault();
    }, false);

    document.addEventListener('dragenter', ev => {
      if (ev.target.parentElement.id === 'DropZoneField') {
        this.setDropZoneActive(true)
      }
    }, false);

    document.addEventListener('drop', ev => {
      ev.preventDefault();

      if (ev.target.id === 'DropZoneField') {
        this.addNode(this.state.draggedNode, 'logotype');
      }

      this.setDropZoneActive(false)
    }, false);
  }

  setBackgroundImage(image) {
    this.setState({
      backgroundImage: image || null
    });
  }

  increaseZIndex() {
    this.setState(state => {
      let index = ++state.activeZIndex

      return {
        activeZIndex: index
      }
    });

    const { activeZIndex } = this.state;
    return activeZIndex;
  }

  addNode = (value, type, fontFamily) => {
    let { nodes } = this.state;

    this.setState(() => {
      const list = [...nodes, { value, type, fontFamily }];

      return {
        nodes: list
      }
    });
  }

  getNodeDimentions = node => {
    const width = node.clientWidth;
    const height = node.clientHeight;

    this.setState(state => {
      const dimenstions = { width, height };

      return {
        activeNode: { ...state.activeNode, dimenstions }
      }
    });

    console.log(this.state.activeNode)
  }

  getNodePosition = node => {
    console.dir(node, 'node')
  }

  deleteNode(nodeIndex) {
    let { nodes } = this.state;
    const updatedNodes = [];

    for (var i = 0; i < nodes.length; i++) {
      if (i !== nodeIndex) {
        updatedNodes.push(nodes[i]);
      }
    }

    this.setState(() => ({
      nodes: updatedNodes
    }));
  }

  showDeleteBtn(node) {
    node.classList.toggle('btn-visible');
  }

  moveNode = (node, ev, index, ) => {
    console.log(node, 'node')
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    node.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();

      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;

      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();

      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;

      // set the element's new position:
      node.style.top = (node.offsetTop - pos2) + "px";
      node.style.left = (node.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  render() {
    const { backgroundImage, nodes, dropZoneActive } = this.state;

    return (
      <main className="App-main container">
        <ColumnLeft
          onClick={this.setBackgroundImage}
          backgroundImage={backgroundImage}
        />
        <ColumnCenter
          backgroundImageSrc={backgroundImage}
          nodes={nodes}
          moveNode={this.moveNode}
          deleteNode={this.deleteNode}
          getNodeDimentions={this.getNodeDimentions}
          dropZoneActive={dropZoneActive}
          showDeleteBtn={this.showDeleteBtn}
        />
        <ColumnRight
          addNode={this.addNode}
          getNodeDimentions={this.getNodeDimentions}
        />
      </main>
    );
  }
};

export default App;
