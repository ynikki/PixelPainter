import React from 'react';
import Pixel from './Pixel';

class Pallet extends React.Component {
  render () {
    console.log(this.props);
    const palletepixels = this.props.colors.map((color, index) => {
      return (
        <div 
          key={ index }
          styles={{ backgroundColor: color }}
          className="pixels"
        />
      )
    });
    return (
      <div 
        className = "pallete"
      >
        { palletepixels }
      </div>
    )
  }
}

export default Pallet;