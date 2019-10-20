import React, { useState } from 'react'

const TextPicker = ({ addNode }) => {
  const [font, setFont] = useState('Arial');

  const textInput = React.createRef();

  const handleClick = () => {
    if (textInput.current.value.length) {
      addNode(textInput.current.value, 'text', font);
      textInput.current.value = '';
    }
  }

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      handleClick();
    }
  }

  return (
    <div className="TextPicker">
      <h3 className="TextPicker__heading heading--small">Add text</h3>
      <input
        ref={textInput}
        onKeyPress={ev => handleKeyPress(ev)}
        className="TextPicker-slogan-input"
        type="text"
        placeholder="Write something..."
      />
      <div className="TextPicker__font-picker">
        <label htmlFor="arial">
          <input type="radio" onClick={() => setFont('Arial')} name="font-family" id="arial" defaultChecked />
          Arial
        </label>
        <label htmlFor="roman">
          <input type="radio" onClick={() => setFont('Times New Roman')} name="font-family" id="roman" />
          Times New Roman
        </label>
        <label htmlFor="sans">
          <input type="radio" onClick={() => setFont('Open Sans')} name="font-family" id="sans" />
          Open Sans
        </label>
      </div>
      <button className="btn btn--small" onClick={() => handleClick()}>Add text</button>
    </div>
  )
}

export default TextPicker
