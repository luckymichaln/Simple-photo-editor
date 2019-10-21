import React, { useState } from 'react'
import { SketchPicker } from 'react-color';

const TextPicker = ({ addNode }) => {
  const [font, setFont] = useState('Arial');
  const [style, setStyle] = useState('unset');
  const [color, setColor] = useState('#000');
  const [colorPickerVisible, toggleColorPicker] = useState(false);

  const textInput = React.createRef();

  const handleClick = () => {
    if (textInput.current.value.length) {
      addNode(textInput.current.value, 'text', font, style, color);
      textInput.current.value = '';
    }
  }

  const handleSetColor = (color) => {
    setColor(color.hex)
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
        <label htmlFor="arial" className="font-arial">
          <input type="radio" onClick={() => setFont('Arial')} name="font-family" id="arial" defaultChecked />
          Arial
        </label>
        <label htmlFor="roman" className="font-roman">
          <input type="radio" onClick={() => setFont('Times New Roman')} name="font-family" id="roman" />
          Times New Roman
        </label>
        <label htmlFor="sans" className="font-sans">
          <input type="radio" onClick={() => setFont('Open Sans')} name="font-family" id="sans" />
          Open Sans
        </label>
      </div>
      <h3 className="TextPicker__heading heading--small">Choose text styling</h3>
      <div className="TextPicker__font-picker">
        <label htmlFor="style-unset" className="font-unset">
          <input type="radio" onClick={() => setStyle('unset')} name="font-styling" id="style-unset" defaultChecked />
          None
        </label>
        <label htmlFor="style-bold" className="font-bold">
          <input type="radio" onClick={() => setStyle('bold')} name="font-styling" id="style-bold" />
          Bold
        </label>
        <label htmlFor="style-italic" className="font-italic">
          <input type="radio" onClick={() => setStyle('italic')} name="font-styling" id="style-italic" />
          Italic
        </label>
        <label htmlFor="style-underline" className="font-underline">
          <input type="radio" onClick={() => setStyle('underline')} name="font-styling" id="style-underline" />
          Underline
        </label>
      </div>
      <div className="TextPicker__color-picker">
        <h3 className="TextPicker__heading heading--small">Choose text color</h3>
        <button
          className="btn"
          onClick={() => toggleColorPicker(!colorPickerVisible)}
        >
          {colorPickerVisible ? 'Close color picker' : 'Open color picker'}
        </button>
        {colorPickerVisible &&
          <SketchPicker
            color={color}
            onChangeComplete={(color) => handleSetColor(color)}
          />
        }
      </div>
      <button className="btn btn--small" onClick={() => handleClick()}>Add text</button>
    </div>
  )
}

export default TextPicker
