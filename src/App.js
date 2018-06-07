import React, { Component } from 'react';
import './App.less';
import { connect } from 'react-redux';
import { createMap } from './actions/map';

const mapStateToProps = (state) => {
  return {
    mapCtrl: state.map.mapCtrl
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createMap: (domNode) => {
      dispatch(createMap(domNode))
    }
  }
}

class App extends Component {
  componentDidMount() {
    
    if (!this.props.mapCtrl) {
      this.props.createMap(this.refs.mapView);
    }
  }

  render() {
    return (
      <div className="App">
        <div className="AppHeader">
          
        </div>
       
        <div ref='mapView' className='mapView'></div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
