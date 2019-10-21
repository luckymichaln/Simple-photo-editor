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
      activeNode: {
        position: {
          x: null,
          y: null
        }
      },
      draggedNode: null,
      dropZoneActive: false
    }

    this.setBackgroundImage = this.setBackgroundImage.bind(this);
    this.getNodeDimentions = this.getNodeDimentions.bind(this);
    this.shuffleBackgrounds = this.shuffleBackgrounds.bind(this);
    this.addNode = this.addNode.bind(this);
    this.moveNode = this.moveNode.bind(this);
    this.deleteNode = this.deleteNode.bind(this);
    this.setDropZoneActive = this.setDropZoneActive.bind(this);
    this.showDeleteBtn = this.showDeleteBtn.bind(this);
  }

  async componentDidMount() {
    this.shuffleBackgrounds()
    const dz = document.getElementById('DropZoneField');

    this.setState({
      dropZoneNode: dz,
    });

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

  async shuffleBackgrounds() {
    this.setState({
      backgroundsRandomArray: null
    });

    let backgroundsRandomArray = []

    try {
      for (let index = 0; index < 4; index++) {
        let response = await fetch('https://source.unsplash.com/random')
        backgroundsRandomArray.push(response.url)

        // API response is too slow and returns the same images.
        // Search as long as each image in new Array is different.
        if (backgroundsRandomArray.length > 0) {
          while (backgroundsRandomArray[index] === response.url) {
            response = await fetch('https://source.unsplash.com/random')
          }
        }
      }
    } catch (err) {
      console.error(err)
    }

    this.setState({
      backgroundsRandomArray
    });
  }

  setDropZoneActive(isActive) {
    this.setState({
      dropZoneActive: isActive
    })
  }

  setBackgroundImage(image) {
    this.setState({
      backgroundImage: image || null
    });
  }

  addNode = (value, type, fontFamily, fontStyle) => {
    let { nodes } = this.state;

    this.setState(() => {
      const list = [...nodes, { value, type, fontFamily, fontStyle }];

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

  moveNode = (node) => {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0, buttonDeleteVisibility = false;

    const dragMouseDown = ev => {
      ev = ev || window.event;
      ev.preventDefault();

      // get the mouse cursor position at startup:
      pos3 = ev.clientX;
      pos4 = ev.clientY;
      document.onmouseup = closeDragElement;

      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
      buttonDeleteVisibility = true;
    }

    const elementDrag = ev => {
      ev = ev || window.event;
      ev.preventDefault();

      // calculate the new cursor position:
      pos1 = pos3 - ev.clientX;
      pos2 = pos4 - ev.clientY;
      pos3 = ev.clientX;
      pos4 = ev.clientY;

      // set the element's new position:
      node.style.top = (node.offsetTop - pos2) + 'px';
      node.style.left = (node.offsetLeft - pos1) + 'px';

      buttonDeleteVisibility = false;
    }

    const closeDragElement = () => {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;

      if (buttonDeleteVisibility) {
        this.showDeleteBtn(node)
      }
    }
    node.onmousedown = dragMouseDown;
  }

  render() {
    const { backgroundImage, nodes, dropZoneActive, dropZoneNode, backgroundsRandomArray } = this.state;

    return (
      <main className="App-main container">
        <ColumnLeft
          onClick={this.setBackgroundImage}
          backgroundImage={backgroundImage}
          backgroundsRandomArray={backgroundsRandomArray}
          shuffleBackgrounds={this.shuffleBackgrounds}
        />
        <ColumnCenter
          backgroundImageSrc={backgroundImage}
          nodes={nodes}
          moveNode={this.moveNode}
          deleteNode={this.deleteNode}
          getNodeDimentions={this.getNodeDimentions}
          dropZoneActive={dropZoneActive}
          dropZoneNode={dropZoneNode}
        />
        <ColumnRight
          addNode={this.addNode}
          getNodeDimentions={this.getNodeDimentions}
          nodes={nodes}
          backgroundImageSrc={backgroundImage}
        />
      </main>
    );
  }
};

export default App;
