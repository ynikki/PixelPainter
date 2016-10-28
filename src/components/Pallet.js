import React from 'react';
import Pixel from './Pixel';


class Pallet extends React.Component {
  render () {
    const palletepixels = this.props.colors.map((color, index) => {
      return (
        <Pixel 
          key={ index }
          color={ color }
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