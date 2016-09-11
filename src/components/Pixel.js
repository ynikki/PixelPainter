import React from 'react';

class Pixel extends React.Component {
  render () {
    return (
      <div
        onClick={ this.props.handleClick }
        className="pixel"
      />
    )
  }
}

export default Pixel;