import React, { Component } from 'react';
import './App.less';
import { connect } from 'react-redux';
import { createMap } from './actions/map';
import { addContainer } from './actions/container'
import Login from './containers/Login/Login'


const mapStateToProps = (state) => {
  return {
    mapCtrl: state.map.mapCtrl,
    component: state.container.component,
    container: (state) => {
      if (state.container) {
        let arrContaners =  this.defaultProps.container.container
        let arrContanersUid =  this.defaultProps.container.containerUid
        if ( this.defaultProps.container.containerUid.includes(state.container.uid)) {
          arrContaners.push(state.container)
        } else {
          arrContanersUid.push(state.container.uid)
        }
      }
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createMap: (domNode) => {
      dispatch(createMap(domNode))
    },
    createLogin: () => {
      dispatch(addContainer('Login/Login'))
    }
  }
}

class App extends Component {
  static defaultProps = {
    containerUid:[],
  }
  componentDidMount() {
    // if (!this.props.mapCtrl) {
    //   this.props.createMap(this.refs.mapView);
    // }
    if (this.props.containerUid.length === 0) {
      this.props.createLogin();
    }
  }

  render() {
    return (
      <div className="app">
        <div  className='loginContainer'>
        <Login/>
        </div>
        <div className='popup'> </div>
        <div id='container' className='container'>
        {/* {(!this.props.component)?'':<this.props.component/>} */}
          <div className="appHeader">
          </div>
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
