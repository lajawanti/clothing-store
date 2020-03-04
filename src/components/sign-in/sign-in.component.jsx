import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../../components/form-input/form-input.component'

class SignIn extends React.Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    } 

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }

    handleChange = (e) => {
        const {name, value} =  e.target;
        this.setState({[name] : value })
    }

    render() {
        return (
            <div className = 'sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit = {this.handleSubmit}>
                    <FormInput 
                        name = "email"
                        type = "email"
                        value= {this.state.email}
                        handleChange = {this.handleChange}
                        label = "email"
                        required
                    />
                    {/* <label>Email</label> */}

                    <FormInput 
                        name = "password"
                        type = "password"
                        value= {this.state.password}
                        handleChange = {this.handleChange}
                        label = "password"
                        required
                    />
                    {/* <label>Password</label> */}

                    <input 
                        type = "submit"
                        value = "submit form"
                    />
                </form>
            </div>
        )
    }
}

export default SignIn;