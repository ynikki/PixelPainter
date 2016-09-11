import React from 'react';
import { connect } from 'react-redux';
import { Canvas } from '../components';
import { Pallet } from '../components';
import { Pixel } from '../components';

import {
  setColor
} from '../actions/canvas';

import {
  selectColor
} from '../actions/pallet';

const mapStateToProps = (reduxState, props) => {
  return {
    ...reduxState
  };
}

class PixelPainterApp extends React.Component {
  constructor (props) {
    super(props);
    console.log(this.props);
    this.setColor = this.props.setColor.bind(this);
    this.selectColor = this.props.selectColor.bind(this);
  }

  render () {
    return (
      <div
        className = "painter"
      >
        <Pixel 
          onClick={ this.selectColor }
        />
        <Pallet 
          colors = { this.props.pallet.colors }
        />
        <Canvas />
      </div>
    );
  }
};

export default connect(mapStateToProps, {setColor, selectColor})(PixelPainterApp);