import React from 'react';
import Pixel from './Pixel';

class Canvas extends React.Component {
  render () {
    const rows = this.props.colors.map((arr, index) => {
      return arr.map((color, index) => {
        return (
          <Pixel
            key={ index }
            color={ color }
          />
        )
      })
    });
      return (
        <div >
          { rows }
        </div>
      )
  }
}

export default Canvas;