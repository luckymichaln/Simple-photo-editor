import React from 'react'
import importAll from '../helpers/import-all';
const list = importAll(require.context('../assets/images/logotypes', false, /\.(png|jpe?g)$/));

const LogoPicker = ({ onClick }) => {

  const ImagesList = list.map((src, key) => {
    return (
      <div key={key} className="logotype-thumb" onClick={ev => onClick(list[key])} >
        <img src={src} srcSet={`${src} 1x, ${src} 2x`} alt="Logotype thumbnail" />
      </div>
    );
  });

  return (
    <div className="LogoPicker">
      <h3 className="LogoPicker__heading heading-small">Add logo</h3>
      <div className="LogoPicker__thumbs">
        {ImagesList}
      </div>
    </div>
  )
}

export default LogoPicker;
