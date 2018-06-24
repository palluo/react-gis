import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createMap } from 'actions/map'
import { addContainer } from 'actions/container'
import { bindActionCreators } from 'redux'
import './style/main.less'

const  defaultProps = {
  loginComponent:null,
  containerUid:[],
}
@connect(
  state => ({ ...state.container}),
  dispatch => bindActionCreators({ addContainer, createMap }, dispatch)
)

class Main extends Component {
  constructor(props){
    super(props)

    this.state = {
      
    }
  }
  componentDidMount() {
    // if (!this.props.loginComponent) {
    //   this.props.addContainer('Login/Login');
    // }
    if (!this.props.mapCtrl) {
      this.props.createMap(this.refs.mapView)
    }
  }

  render() {
    return (
      <div className="app">
        <div className='popup'> </div>
        <div id='container' className='container'>
        {/* {(!this.props.component)?'':<this.props.component/>} */}
          <div className="appHeader">
          </div>
        </div>
        <div ref='mapView' className='mapView'></div>
      </div>
    )
    
  }
}

export default Main;
