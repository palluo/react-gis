import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createMap } from './actions/map'
import { addContainer } from './actions/container'
import { bindActionCreators } from 'redux'
import  Login from './containers/Login/Login'
import './App.less'

const  defaultProps = {
  loginComponent:null,
  containerUid:[],
}
@connect(
  state => ({ ...state.container}),
  dispatch => bindActionCreators({ addContainer }, dispatch)
)

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      
    }
  }
  componentDidMount() {
    console.log(this)
    // if (!this.props.loginComponent) {
    //   this.props.addContainer('Login/Login');
    // }
  }

  render() {
    return (
      <div className="app">
        <div  className='loginContainer' id ='loginContainer'>
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
    )
    
  }
}

export default App;
