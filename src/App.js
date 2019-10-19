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
      nodeZIndex: 1
    }

    this.setBackgroundImage = this.setBackgroundImage.bind(this);
    this.addNode = this.addNode.bind(this);
    this.removeNode = this.removeNode.bind(this);
  }

  setBackgroundImage(image) {
    this.setState({
      backgroundImage: image || null
    });
  }

  increaseZIndex() {
    this.setState(state => {
      let index = ++state.nodeZIndex

      return {
        nodeZIndex: index
      }
    });

    const { nodeZIndex } = this.state;
    return nodeZIndex;
  }

  addNode = node => {
    let { nodes } = this.state;

    this.setState(state => {
      const list = [...nodes, node];

      return {
        nodes: list
      }
    });
  }

  removeNode(node) {
    this.setState(state => ({
      // nodes: state.node.push(node)
    }));
  }

  moveNode(node) {
    this.setState(state => ({

    }));
  }

  render() {
    const { backgroundImage, nodes } = this.state;

    return (
      <main className="App-main container">
        <ColumnLeft onClick={this.setBackgroundImage} />
        <ColumnCenter backgroundImageSrc={backgroundImage} nodes={nodes} />
        <ColumnRight addNode={this.addNode} />
      </main>
    );
  }
};

export default App;
