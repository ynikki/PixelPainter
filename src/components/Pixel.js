import React from 'react';

class Pixel extends React.Component {
  render () {
    return (
      <div
        className="pixels"
        style={{ backgroundColor: this.props.color }}
        onClick={ this.props.handleClick }
      />
    )
  }
}

export default Pixel;