import React from 'react'
import ReactDom from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Input, Button, Form, Icon } from 'antd'
import './style/Login.less'

const FormItem = Form.Item
function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

export default class Login extends React.Component {
    componentDidMount() {
    }
    handleSubmit = (e) => {
        e.preventDefault();
    }
    render() {
       
        return (
            <div className='dgp-login-container'>
                <Form layout="inline" onSubmit={this.handleSubmit}>
                    <FormItem
                    >
                       <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名：" />
                    </FormItem>
                    <FormItem
                    >
                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码：" />
                    </FormItem>
                    <FormItem>
                        <Button
                            type="primary"
                            htmlType="submit"
                        >
                            登录
          </Button>
                    </FormItem>
                </Form>
            </div >
        )
    }
}