import React from 'react';
import ColumnLeft from './components/columns/ColumnLeft';
import ColumnCenter from './components/columns/ColumnCenter';
import ColumnRight from './components/columns/ColumnRight';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundImage: null,
      texts: []
    }

    this.setBackgroundImage = this.setBackgroundImage.bind(this);
    this.setText = this.setText.bind(this);
  }

  setBackgroundImage(image) {
    this.setState({
      backgroundImage: image || null
    });
  }

  setText(text) {
    this.setState((state) => ({
      texts: state.texts.push(text)
    }));
  }

  render() {
    const { backgroundImage } = this.state;

    return (
      <main className="App-main container">
        <ColumnLeft onClick={this.setBackgroundImage} />
        <ColumnCenter backgroundImageSrc={backgroundImage} />
        <ColumnRight />
      </main>
    );
  }
};

export default App;
