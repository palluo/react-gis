import React, { Component } from 'react'
import './style/header.less'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className='container'>
                <div> ReactGIS </div>
            </div>
        )
    }

}

export default Header