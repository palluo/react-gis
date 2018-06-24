import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import { Input, Button, Form, Icon } from 'antd'
import { login } from 'actions/login'
import './style/Login.less'

const FormItem = Form.Item
function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

@connect(
    state => ({ ...state.login }),
    dispatch => bindActionCreators({ login }, dispatch)
)
class Login extends React.Component {
    static defaultProps = {
        isShow : true,
    }

    constructor( props ){
        super(props)
        this.state ={
        }
    }
    componentDidMount() {
        this.props.form.validateFields();
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                //console.log(this.props.history)
                //this.props.history.push('/main')
                this.props.login(values.userName, values.password, () =>  this.props.history.replace('/main'))
            }
        });
    }
    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const userNameError = isFieldTouched('userName') && getFieldError('userName')
        const passwordError = isFieldTouched('password') && getFieldError('password')
        return (
            <div className='dgp-login-container'>
                <Form layout="inline" onSubmit={this.handleSubmit} className='loginForm'>
                    <FormItem
                        validateStatus={userNameError ? 'error' : ''}
                        help={userNameError || ''}
                    >
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '请输入用户名!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名：" />
                        )}
                    </FormItem>
                    <FormItem
                        validateStatus={passwordError ? 'error' : ''}
                        help={passwordError || ''}
                    >
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码：" />
                        )}
                    </FormItem>
                    <FormItem>
                        <Button
                            type="primary"
                            htmlType="submit"
                            disabled={hasErrors(getFieldsError())}
                        >
                            登 录
          </Button>
                    </FormItem>
                </Form>
            </div >
        )
        
    }
}
Login = Form.create()(Login)
export default Login