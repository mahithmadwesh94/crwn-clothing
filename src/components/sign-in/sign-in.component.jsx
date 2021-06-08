import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';

import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h1>I already have an account</h1>
                <span>Sign in with your email and password </span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" label="Email" handleChange={this.handleChange} value={this.state.email} required />


                    <FormInput name="password" type="password" label="Password" handleChange={this.handleChange} value={this.state.password} required />

<<<<<<< HEAD
                    <div className="buttons">
                        <CustomButton type="submit" value="Submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
=======

                    <CustomButton type="submit" value="Submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle}>Sign In</CustomButton>
>>>>>>> ecf177e332d4ac90a1e2a8062e6540b3aa8080b7
                </form>



            </div>
        )
    }
}

export default SignIn;